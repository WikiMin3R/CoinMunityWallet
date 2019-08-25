import React, { useState, useEffect, memo } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import PropTypes from "prop-types";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	LayoutAnimation,
	Platform
} from "react-native";
import { systemWeights } from "react-native-typography";

const {
	Constants: {
		colors
	}
} = require("../../ProjectData.json");
const {
	setKeychainValue,
	getKeychainValue,
	vibrate,
	shuffleArray
} = require("../utils/helpers");

const ACTIVE_OPACITY = 0.2;

const makeDots = (num) => {
	let ret = '';
	while (num > 0) {
		ret += ' ○ ';
		num--;
	}
	return ret;
};

interface PinComponent {
	onSuccess: Function,
	updateSettings?: Function,
	wipeDevice?: Function,
	pinAttemptsRemaining?: number,
	onFailure?: Function,
	pinSetup?: boolean, //true pushes the user through the pin setup process.
	style?: object
}
const _Pin = ({ onSuccess = () => null, updateSettings = () => null, wipeDevice = () => null, pinAttemptsRemaining = 5, onFailure = () => null, pinSetup = false, style = {} }: PinComponent) => {
	let _digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	_digits = shuffleArray(_digits);
	const [digits, setDigits] = useState(_digits);
	const [value, setValue] = useState("");
	const [tmpPin, setTmpPin] = useState("");
	const [pinSetupStep, setPinSetupStep] = useState(1);
	const [invalidPin, setInvalidPin] = useState(false);
	const [attemptsRemaining, setAttemptsRemaining] = useState(pinAttemptsRemaining);
	
	useEffect(() => {
		//ComponentDidMount
		if (pinSetup) {
			//Allow enough time to transition to PinPad view
			setTimeout(() => {
				updateSettings({ pin: false });
			}, 500);
		}
	}, []);
	
	if (Platform.OS === "ios") useEffect(() => LayoutAnimation.easeInEaseOut());

	const _wipeDevice = async () => {
		await wipeDevice();
		await onFailure();
		await updateSettings({ pinAttemptsRemaining: 5 });
	};

	const handleClear = (_vibrate = true): void => {
		if (_vibrate) vibrate();
		setValue("");
	};

	const handleRemove = (): void => {
		vibrate();
		setValue(value.substr(0, value.length - 1));
	};

	const handlePress = (num: number) => {
		vibrate();
		let _value = value;
		_value += String(num);
		setValue(_value);
	};

	const attemptToSignInWithPin = async (): Promise<void> => {
		try {
			const pin = await getKeychainValue({ key: "pin" });
			//If Invalid Pin
			if (pin.error === false && value !== pin.data.password) {
				if (attemptsRemaining <= 1) {
					//Wipe device. Too many attempts
					console.log("Pin attempt threshold breached. Wiping device. Hope you made a backup, friend.");
					await _wipeDevice();
					await updateSettings({ pinAttemptsRemaining: 5 });
					vibrate(2000);
				} else {
					//Reduce the amount of pin attempts remaining.
					const _attemptsRemaining = attemptsRemaining-1;
					updateSettings({ pinAttemptsRemaining: _attemptsRemaining });
					setAttemptsRemaining(_attemptsRemaining);
				}

				handleClear();
				return;
			}

			//If Valid Pin
			if (pin.error === false && value === pin.data.password) {
				await updateSettings({ pinAttemptsRemaining: 5 });
				handleClear(false);
				onSuccess();
			}
		} catch (e) {
			console.log(e);
		}
	};

	const setupPin = async (): Promise<void> => {
		try {
			if (pinSetup && pinSetupStep === 1) {
				if (value.length < 1) return;
				setTmpPin(value);
				//Randomize The Digits & Clear The Value
				const newDigits = shuffleArray(digits);
				await Promise.all([
					setDigits(newDigits),
					setPinSetupStep(2),
					setValue(""),
					setInvalidPin(false)
				]);
				return;
			}

			if (pinSetup && pinSetupStep === 2) {
				if (value === tmpPin) {
					await setKeychainValue({ key: "pin", value });
					await updateSettings({ pin: true });
					onSuccess();
					return;
				} else {
					//Invalid Pin (Try Again)
					vibrate(1000);
					//Randomize The Digits
					const newDigits = shuffleArray(digits);
					await setTmpPin("");
					await Promise.all([
						setDigits(newDigits),
						setPinSetupStep(1),
						setValue(""),
						setInvalidPin(true)
					]);
				}
			}
		} catch (e) {}
	};

	const handleSubmit = (): void => {
		if (value.length < 1) return;
		vibrate();
		if (pinSetup) {
			setupPin();
		} else {
			attemptToSignInWithPin();
		}
	};

	const PinPadButton = ({ num }: { num: number }) => {
		return (
			<TouchableOpacity onPress={()=> handlePress(num)} activeOpacity={ACTIVE_OPACITY} style={styles.buttonContainer}>
				<Text
					style={styles.button}
				>
					{num}
				</Text>
			</TouchableOpacity>
		);
	};

	const getDots = (): string => {
		try {
			if (value.length > 4) {
				return ` ● ● ● ●  +${value.length - 4}`;
			} else {
				const marks = value.replace(/./g, ' ● ');
				const dots = makeDots(4-value.length);
				return `${marks}${dots}`;
			}
		} catch (e) {
			return makeDots(4);
		}
	};

	const getHeaderText = () => {
		try {
			if (pinSetup) {
				if (pinSetupStep === 1) {
					return (
						<View style={{alignItems: "center", justifyContent: "center"}}>
							{invalidPin &&
							<Text style={styles.text}>
								Pins Did Not Match
							</Text>
							}
							<Text style={[styles.text, { fontSize: 24 }]}>
								Please Enter Your Pin
							</Text>
						</View>
					);
				} else {
					return (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Text style={[styles.text, { fontSize: 24 }]}>
								Please Re-Enter Your Pin
							</Text>
						</View>
					);
				}
			}
			return (
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<Text style={styles.header}>
						Enter pin:
					</Text>
					<Text style={styles.text}>
						{`Attempts Remaining: ${attemptsRemaining}`}
					</Text>
				</View>
			);
		} catch (e) {}
	};

	return (
		<View style={[styles.container, { ...style }]}>

			<View style={[styles.row, { paddingHorizontal: 20 }]}>
				{getHeaderText()}
			</View>

			<View style={[styles.row, { paddingHorizontal: 20 }]}>
				<Text style={styles.dots}>{getDots()}</Text>
			</View>

			<View style={styles.row}>
				<PinPadButton num={digits[0]} />
				<PinPadButton num={digits[1]} />
				<PinPadButton num={digits[2]} />
			</View>

			<View style={styles.row}>
				<PinPadButton num={digits[3]} />
				<PinPadButton num={digits[4]} />
				<PinPadButton num={digits[5]} />
			</View>

			<View style={styles.row}>
				<PinPadButton num={digits[6]} />
				<PinPadButton num={digits[7]} />
				<PinPadButton num={digits[8]} />
			</View>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => handleClear()} activeOpacity={ACTIVE_OPACITY} style={[styles.buttonContainer, { borderWidth: 0 }]}>
					<Text style={styles.button}>C</Text>
				</TouchableOpacity>
				<PinPadButton num={digits[9]} />
				<TouchableOpacity onPress={handleRemove} activeOpacity={ACTIVE_OPACITY} style={[styles.buttonContainer, { borderWidth: 0 }]}>
					<EvilIcons name={"chevron-left"} size={55} color={colors.white} />
				</TouchableOpacity>
			</View>

			<View style={[styles.row, { marginTop: 20 }]}>
				<TouchableOpacity onPress={handleSubmit} activeOpacity={ACTIVE_OPACITY} style={styles.submitButton}>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

_Pin.propTypes = {
	onSuccess: PropTypes.func.isRequired,
	updateSettings: PropTypes.func,
	wipeDevice: PropTypes.func,
	pinAttemptsRemaining: PropTypes.number,
	onFailure: PropTypes.func,
	pinSetup: PropTypes.bool,
	style: PropTypes.object
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "transparent",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 80,
		zIndex: 300
	},
	header: {
		...systemWeights.light,
		color: colors.white,
		fontSize: 35
	},
	text: {
		...systemWeights.regular,
		color: colors.white,
		fontSize: 18,
		textAlign: "center",
		marginHorizontal: 20
	},
	dots: {
		...systemWeights.bold,
		color: colors.white,
		fontSize: 25
	},
	buttonContainer: {
		width: 60,
		height: 60,
		borderRadius: 100,
		borderWidth: 1,
		marginHorizontal: 25,
		backgroundColor: "transparent",
		borderColor: colors.white,
		alignItems:"center",
		justifyContent:"center"
	},
	submitButton: {
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderColor: colors.white,
		backgroundColor: "transparent"
	},
	button: {
		...systemWeights.regular,
		fontSize: 25,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: colors.white,
		opacity: 1
	},
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	}
});

//ComponentShouldNotUpdate
const Pin = memo(
	_Pin,
	() => true
);


export default Pin;
