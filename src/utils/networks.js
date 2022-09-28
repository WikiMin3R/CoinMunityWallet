// https://en.bitcoin.it/wiki/List_of_address_prefixes
const networks = {
	artbyte: {
		messagePrefix: "\x18ArtByte Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x17,
		scriptHash: 0x5,
		wif: 0x97,
		minFeePerByte: 200000
	},
	auroracoin: {
		messagePrefix: "\x1bAuroracoin Signed Message:\n",
		bech32: 'aur',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x17,
		scriptHash: 0x5,
		wif: 0xb0
	},
	bitcoin: {
		messagePrefix: '\x18Bitcoin Signed Message:\n',
		bech32: 'bc',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x00,
		scriptHash: 0x05,
		wif: 0x80
	},
	canadaecoin: {
		messagePrefix: '\x19Canada eCoin Signed Message:\n',
		bech32: 'cdn',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x1c,
		scriptHash: 0x05,
		wif: 0x9C
	},
	digitalcoin: {
		messagePrefix: "\x1cDigitalcoin Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x1e,
		scriptHash: 0x5,
		wif: 0x80
	},
	egulden: {
		messagePrefix: '\x19Egulden Signed Message:\n',
		bech32: 'efl',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x30,
		scriptHash: 0x05,
		wif: 0xb0
	},
	globalboost: {
		messagePrefix: "\x1cGlobalBoost Signed Message:\n",
		bech32: 'gb',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x4d,
		scriptHash: 0x8b,
		wif: 0xd0
	},
	infiniloop: {
		messagePrefix: "\x1bInfiniLooP Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x21,
		scriptHash: 0x55,
		wif: 0x99
	},
	komodo: {
		messagePrefix: "\x17Komodo Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x3c,
		scriptHash: 0x55,
		wif: 0xbc
	},
	litecoin: {
		messagePrefix: '\x19Litecoin Signed Message:\n',
		bech32: 'ltc',
		bip32: {
			public: 0x019da462,
			private: 0x019d9cfe
		},
		pubKeyHash: 0x30,
		scriptHash: 0x32,
		wif: 0xb0
	},
	litecoincash: {
		messagePrefix: "\x19Litecoin Signed Message:\n",
		bech32: 'lcc',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x1c,
		scriptHash: 0x5,
		wif: 0xb0,
		disabled: true
	},
	lynx: {
		messagePrefix: "\x15Lynx Signed Message:\n",
		bech32: 'ltc',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x2d,
		scriptHash: 0x16,
		wif: 0xad
	},
	novacoin: {
		messagePrefix: "\x19NovaCoin Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x8,
		scriptHash: 0x14,
		wif: 0x88
	},
	primecoin: {
		messagePrefix: "\x1aPrimecoin Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x17,
		scriptHash: 0x53,
		wif: 0x97
	},
	terracoin: {
		messagePrefix: "\x19DarkCoin Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x0,
		scriptHash: 0x5,
		wif: 0x80
	},
	unitus: {
		messagePrefix: "\x17Unitus Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x44,
		scriptHash: 0xa,
		wif: 0x84
	},
	unobtanium: {
		messagePrefix: "\x1bUnobtanium Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x82,
		scriptHash: 0x1e,
		wif: 0xe0
	},
	vcash: {
		messagePrefix: "\x1dVanillacash Signed Message:\\n",
		bech32: 'undefined',
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x47,
		scriptHash: 0x08,
		wif: 0xc7
	},
	zetacoin: {
		messagePrefix: "\x19Zetacoin Signed Message:\n",
		bech32: false,
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		pubKeyHash: 0x50,
		scriptHash: 0x9,
		wif: 0xe0,
		minFeePerByte: 10000
	}
};

//Max amount of BTC/LTC.
const maxCoins = {
	canadaecoin: 11250000000000000,
	bitcoin: 2100000000000000,
	litecoin: 8400000000000000,
	auroracoin: 2331805500000000,
	egulden: 2100000000000000,
	unobtanium: 25000000000000,
	komodo: 2100000000000000,
	artbyte: 25000000000000000,
	lynx: 9200000000000000000,
	digitalcoin: 20000000000000000,
	globalboost: 2100000000000000,
	novacoin: 250000000000000,
	primecoin: 4000000000000000,
	infiniloop: 8800000000000000,
	terracoin: 2100000000000000,
	bitcoin: 10000000000000000,
	unitus: 10000000000000000,
	vcash: 3070000000000000,
	zetacoin: 20000000000000000,
	litecoincash: 8400000000000000
};

//Returns an array of all available coins from the networks object.
// const availableCoins = Object.keys(networks).map(coin => coin);

const availableCoins = [
    "auroracoin",
    "bitcoin",
    "canadaecoin",
    "egulden",
    "globalboost",
    "litecoin",
    "lynx",

    // under this line, not tested.
    "artbyte",
    "novacoin",
    "primecoin",
    "terracoin",
    "unitus",
    "vcash",
    "zetacoin"

    // under this line, fails tests.
    // "digitalcoin",  // the transaction was rejected by network rules.  64: premature-version2-tx  [0200000001f9297b9624f0f472b24c37454559f7a3bc369908ca50a79223926a939e6fdde9000000006b483045022100e74eaae3cf251270932a2d9783ea7785af2a511d5cba16b52e0b2a1b0d6f5733022026ece9d8134b8b9f4e99e2998d85129e6733c63c64913097c28ee84fbcf42cb701210240ee2c87cd92cf867777a89abdc8525c9818255075a86bd6a34a25cffac046dfffffffff0176403ec4010000001976a914e39c1b6f69acb5cc03aacb7c3c433a6fd18c98a688ac00000000]
    // "infiniloop",	// the transaction was rejected by network rules 
    // "komodo", 		// the transaction was rejected by network rules 
    // "unobtanium",	// the transaction was rejected by network rules 64: version // 02000000019672c8d33f86db2242352f8db8176d05a21a9045cdd3fdb4075e6c28652a455c000000006a473044022067bc4a2577fd4f26c225d61398a5ae657f1483961099c45a971cd3463668f55f02207fb6393fe1876fdf2f5924049b0a2452f4853cd0f2c5d040f061462acc9e8657012103c0744215740f28dea38a0ed904c4251cabfd3ce32cf2da6b72c3486082d4da68ffffffff01331af400000000001976a914e39c1b6f69acb5cc03aacb7c3c433a6fd18c98a688ac00000000
    
    // under this line, has other than 8 decimals.
    // "litecoincash", 	// 7 decimals
]

const supportsRbf = {
	bitcoin: true,
	litecoin: false,
	canadaecoin: false,
	auroracoin: true,
	egulden: false,
	unobtanium: false,
	komodo: false,
	artbyte: false,
	lynx: true,
	digitalcoin: false,
	globalboost: true,
	infiniloop: false,
	novacoin: false,
	primecoin: false,
	terracoin: false,
	unitus: false,
	bitcoin: false,
	vcash: false,
	zetacoin: false,
	litecoincash: true
};

const zeroValueItems = {
	bitcoin: 0,
	litecoin: 0,
	canadaecoin: 0,
	auroracoin: 0,
	egulden: 0,
	unobtanium: 0,
	komodo: 0,
	artbyte: 0,
	lynx: 0,
	digitalcoin: 0,
	globalboost: 0,
	infiniloop: 0,
	novacoin: 0,
	primecoin: 0,
	terracoin: 0,
	unitus: 0,
	vcash: 0,
	zetacoin: 0,
	litecoincash: 0,
	timestamp: null
};

const arrayTypeItems = {
	bitcoin: [],
	litecoin: [],
	canadaecoin: [],
	auroracoin: [],
	egulden: [],
	unobtanium: [],
	komodo: [],
	artbyte: [],
	lynx: [],
	digitalcoin: [],
	globalboost: [],
	infiniloop: [],
	novacoin: [],
	primecoin: [],
	terracoin: [],
	unitus: [],
	vcash: [],
	zetacoin: [],
	litecoincash: [],
	timestamp: null
};

const objectTypeItems = {
	bitcoin: {},
	litecoin: {},
	canadaecoin: {},
	auroracoin: {},
	egulden: {},
	unobtanium: {},
	komodo: {},
	artbyte: {},
	lynx: {},
	digitalcoin: {},
	globalboost: {},
	infiniloop: {},
	novacoin: {},
	primecoin: {},
	terracoin: {},
	unitus: {},
	vcash: {},
	zetacoin: {},
	litecoincash: {},
	timestamp: null
};

const defaultWalletShape = {
	id: "",
	name: "",
	type: "default",
	addresses: arrayTypeItems,
	addressIndex: zeroValueItems,
	changeAddresses: arrayTypeItems,
	changeAddressIndex: zeroValueItems,
	utxos: arrayTypeItems,
	transactions: arrayTypeItems,
	blacklistedUtxos: arrayTypeItems,
	confirmedBalance: zeroValueItems,
	unconfirmedBalance: zeroValueItems,
	lastUpdated: zeroValueItems,
	hasBackedUpWallet: false,
	walletBackupTimestamp: "",
	keyDerivationPath: {
		bitcoin: "84",
		bitcoinTestnet: "84",
		litecoin: "44",
		litecoinTestnet: "44",
		canadaecoin: "44",
		auroracoin: "44",
		egulden: "44",
		unobtanium: "44",
		komodo: "44",
		artbyte: "44",
		lynx: "44",
		digitalcoin: "44",
		globalboost: "44",
		infiniloop: "44",
		novacoin: "44",
		primecoin: "44",
		terracoin: "44",
		unitus: "44",
		vcash: "44",
		zetacoin: "44",
		litecoincash: "44"
	},
	coinTypePath: {
		bitcoin: "0",
		bitcoinTestnet: "1",
		litecoin: "2",
		litecoinTestnet: "1",
		canadaecoin: "34",
		auroracoin: "85",
		egulden: "78",
		unobtanium: "92",
		komodo: "141",
		artbyte: "720",
		lynx: "191",
		digitalcoin: "18",
		globalboost: "718",
		infiniloop: "722",
		novacoin: "50",
		primecoin: "24",
		terracoin: "83",
		unitus: "723",
		vcash: "127",
		zetacoin: "719",
		litecoincash: "192"
	},
	addressType: { //Accepts bech32, segwit, legacy
		bitcoin: "bech32",
		bitcoinTestnet: "bech32",
		litecoin: "legacy",
		litecoinTestnet: "legacy",
		canadaecoin: "legacy",
		auroracoin: "legacy",
		egulden: "legacy",
		unobtanium: "legacy",
		komodo: "legacy",
		artbyte: "legacy",
		lynx: "legacy",
		digitalcoin: "legacy",
		globalboost: "legacy",
		infiniloop: "legacy",
		novacoin: "legacy",
		primecoin: "legacy",
		terracoin: "legacy",
		unitus: "legacy",
		vcash: "legacy",
		zetacoin: "legacy",
		litecoincash: "legacy"
	},
	rbfData: objectTypeItems
};

const getCoinImage = (coin = "bitcoin") => {
	try {
		coin = coin.toLowerCase();
		coin = coin.replace("testnet", "");

		switch (coin) {
			case "bitcoin":
				return require(`../assets/ecoins/bitcoin.png`);
			case "litecoin":
				return require(`../assets/ecoins/litecoin.png`);
			case "canadaecoin":
				return require(`../assets/ecoins/canadaecoin.png`);	
			case "auroracoin":
				return require(`../assets/ecoins/auroracoin.png`);
			case "egulden":
				return require(`../assets/ecoins/egulden.png`);
			case "unobtanium":
				return require(`../assets/ecoins/unobtanium.png`);	
			case "komodo":
				return require(`../assets/ecoins/komodo.png`);	
			case "artbyte":
				return require(`../assets/ecoins/artbyte.png`);	
			case "lynx":
				return require(`../assets/ecoins/lynx.png`);	
			case "digitalcoin":
				return require(`../assets/ecoins/digitalcoin.png`);	
			case "globalboost":
				return require(`../assets/ecoins/globalboost.png`);	
			case "infiniloop":
				return require(`../assets/ecoins/infiniloop.png`);	
			case "novacoin":
				return require(`../assets/ecoins/novacoin.png`);	
			case "primecoin":
				return require(`../assets/ecoins/primecoin.png`);	
			case "terracoin":
				return require(`../assets/ecoins/terracoin.png`);	
			case "unitus":
				return require(`../assets/ecoins/unitus.png`);	
			case "vcash":
				return require(`../assets/ecoins/vcash.png`);	
			case "zetacoin":
				return require(`../assets/ecoins/zetacoin.png`);	
			case "litecoincash":
				return require(`../assets/ecoins/litecoincash.png`);		
			default:
				return require(`../assets/logo/main_icon.png`);
		}
	} catch (e) {
		return require(`../assets/logo/main_icon.png`);
	}
};

const getCoinData = ({ selectedCrypto = "bitcoin", cryptoUnit = "BTC" }) => {
	try {
		let acronym = "BTC";
		let satoshi = "satoshi";
		let oshi = "sats";
		let blockTime = 10; //min
		switch (selectedCrypto) {
			case "bitcoin":
				satoshi = "satoshi";
				acronym = cryptoUnit === "satoshi" ? "sats" : "BTC";
				oshi = "sats";
				blockTime = 10;
				color = "#f7931a";
				return { acronym, label: "Bitcoin", crypto: "BTC", satoshi, oshi, blockTime, color };
			case "litecoin":
				satoshi = "litoshi";
				oshi = "lits";
				acronym = cryptoUnit === "satoshi" ? "lits" : "LTC";
				blockTime = 2.5;
				color = "#444444";
				return { acronym, label: "Litecoin", crypto: "LTC", satoshi, oshi, blockTime, color };
			case "canadaecoin":
				return { 
					acronym: cryptoUnit === "satoshi" ? "bits" : "CDN", 
					label: "Canada eCoin", 
					crypto: "CDN", 
					satoshi: "bit", 
					oshi: "bits", 
					blockTime: 5,
					color: "#90191c"
				};				
			case "auroracoin":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "AUR";
				blockTime = 300;
				color = "#0A6C5E";
				return { acronym, label: "Auroracoin", crypto: "AUR", satoshi, oshi, blockTime, color };
			case "egulden":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "EFL";
				blockTime = 120;
				color = "#FF940B";
				return { acronym, label: "eGulden", crypto: "EFL", satoshi, oshi, blockTime, color };
			case "unobtanium":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "UNO";
				blockTime = 180;
				color = "#2f87bb";
				return { acronym, label: "Unobtanium", crypto: "UNO", satoshi, oshi, blockTime, color };
			case "komodo":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "KMD";
				blockTime = 60;
				color = "#026782";
				return { acronym, label: "Komodo", crypto: "KMD", satoshi, oshi, blockTime, color };
			case "artbyte":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "ABY";
				blockTime = 120;
				color = "#8B0D10";
				return { acronym, label: "Artbyte", crypto: "ABY", satoshi, oshi, blockTime, color };
			case "lynx":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "LYNX";
				blockTime = 40;
				color = "#0071ba";
				return { acronym, label: "Lynx", crypto: "LYNX", satoshi, oshi, blockTime, color };
			case "digitalcoin":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "DGC";
				blockTime = 40;
				color = "#BC7600";
				return { acronym, label: "Digitalcoin", crypto: "DGC", satoshi, oshi, blockTime, color };
			case "globalboost":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "BSTY";
				blockTime = 600;
				color = "#78570D";
				return { acronym, label: "GlobalBoost-Y", crypto: "BSTY", satoshi, oshi, blockTime, color };
			case "infiniloop":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "IL8P";
				blockTime = 40;
				color = "#000000";
				return { acronym, label: "InfiniLooP", crypto: "IL8P", satoshi, oshi, blockTime, color };
			case "novacoin":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "NVC";
				blockTime = 450;
				color = "#908010";
				return { acronym, label: "Novacoin", crypto: "NVC", satoshi, oshi, blockTime, color };
			case "primecoin":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "XPM";
				blockTime = 60;
				color = "#A67522";
				return { acronym, label: "Primecoin", crypto: "XPM", satoshi, oshi, blockTime, color };
			case "terracoin":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "TRC";
				blockTime = 120;
				color = "#096432";
				return { acronym, label: "Terracoin", crypto: "TRC", satoshi, oshi, blockTime, color };
			case "unitus":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "UIS";
				blockTime = 60;
				color = "#037BB0";
				return { acronym, label: "Unitus", crypto: "UIS", satoshi, oshi, blockTime, color };
			case "vcash":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "XVC";
				blockTime = 60;
				color = "#B50126";
				return { acronym, label: "Vanillacash", crypto: "XVC", satoshi, oshi, blockTime, color };
			case "zetacoin":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "ZET";
				blockTime = 30;
				color = "#155169";
				return { acronym, label: "Zetacoin", crypto: "ZET", satoshi, oshi, blockTime, color };
			case "litecoincash":
				satoshi = "satoshi";
				oshi = "sats";
				acronym = cryptoUnit === "satoshi" ? "sats" : "LCC";
				blockTime = 150;
				color = "#068210";
				return { acronym, label: "Litecoin Cash", crypto: "LCC", satoshi, oshi, blockTime, color };
			default:
				acronym = cryptoUnit === "satoshi" ? "bits" : "BTC";
				return { acronym, label: "Bitcoin", crypto: "BTC", satoshi, oshi, blockTime, color, color };
		}
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	networks,
	availableCoins,
	defaultWalletShape,
	maxCoins,
	supportsRbf,
	zeroValueItems,
	arrayTypeItems,
	getCoinImage,
	getCoinData
};
