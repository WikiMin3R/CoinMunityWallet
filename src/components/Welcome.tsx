import React, {useEffect, memo} from "react";
import {StyleSheet, View, LayoutAnimation, Platform, Image, Linking, Dimensions, PixelRatio} from "react-native";
import {systemWeights} from "react-native-typography";
import Button from "./Button";
import { Text } from "../styles/components";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const {
	version
} = require("../../package.json");

const _Welcome = ({ onClose = () => null, children = <View /> } = {}) => {

	if (Platform.OS === "ios") useEffect(() => LayoutAnimation.easeInEaseOut());
	return (
		<View style={styles.container}>
			<Text style={styles.header}>EWMCI CoinMunity Wallet</Text>
			<Text onPress={() => Linking.openURL("https://github.com/WikiMin3R/CoinMunityWallet").catch((e) => console.log(e))} >
				<Text style={styles.repoLink}>https://github.com/WikiMin3R/CoinMunityWallet</Text>
			</Text>
			<Text style={styles.repoLink}>v{version}</Text>

			<Image
				style={styles.icon}
				source={require("../assets/logo/main_icon.png")}
			/>
			<View style={{ width: "100%" }}>
			
				{children}

				<Text style={styles.subHeader}>Beta Software</Text>
				<Text style={styles.text}>Thank you for trying the CoinMunity experience.  This software is currently in the beta testing phase.  Please refrain from storing any value in this software while not testing it.  Your best long-term storage option is to use a paper wallet.  This software is meant to hold folding money, not life savings.</Text>

				<Text style={styles.subHeader}>Will you join us?</Text>
				<Text style={styles.text}>Consider joining one of the many EWMCI community channels and engaging with the community.  Software like this is only useful when there is a healthy community that participates.</Text>

				<Text style={styles.text}>Visit our website:</Text>
				<Text
					onPress={() => Linking.openURL("https://ewmci.info/coinmunitywallet").catch((e) => console.log(e))}
					style={[styles.text, { marginTop: 5 }]}
				>
					<Text style={styles.semiBoldText}>https://ewmci.info/coinmunitywallet</Text>
				</Text>

				<Text style={styles.text}>Find us in our community social channels:</Text>
				<Text
					onPress={() => Linking.openURL("https://twitter.com/ewmcil").catch((e) => console.log(e))}
					style={[styles.text, { marginTop: 5 }]}
				>
					<Text style={styles.semiBoldText}>Twitter: </Text>@ewmcil
				</Text>
				
				<Text
					onPress={() => Linking.openURL("mailto:info@ewmci.com?subject=Requesting some help RE: the CoinMunity wallet.").catch((e) => console.log(e))}
					style={[styles.text, { marginTop: 5 }]}
				>
					<Text style={styles.semiBoldText}>Email: </Text>info@ewmci.com
				</Text>
			</View>
			<Button text="continue" style={{marginVertical: 30}} onPress={onClose} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		margin: 10,
		paddingBottom: 20
	},
	icon: {
		width: 80, height: 80, margin: 20
	},
	header: {
		...systemWeights.semibold,
		textAlign: "center",
		margin: 0,
		marginTop: 8,
		fontSize: normalize(24)
	},
	repoLink: {
		fontSize: normalize(12),
		...systemWeights.semibold,
		textAlign: "center",
		margin: 0,
	},
	text: {
		...systemWeights.regular,
		fontSize: normalize(15),
		alignSelf: "flex-start",
		textAlign: "left",
		marginTop: 10
	},
	semiBoldText: {
		...systemWeights.semibold,
		fontSize: normalize(13),
		alignSelf: "flex-start",
		textAlign: "left",
		marginTop: 10
	},
	subHeader: {
		...systemWeights.light,
		marginTop: 30,
		fontSize: normalize(15),
		alignSelf: "flex-start",
		textAlign: "left",
		...systemWeights.semibold
	}
});

//ComponentShouldNotUpdate
const Welcome = memo(
	_Welcome,
	(prevProps, nextProps) => {
		if (!prevProps || !nextProps) return true;
		return prevProps === nextProps;
	}
);

export default Welcome;
