import TOKEN_HOLDERS from '../assets/whitelist-tokens/holders.json';

export { TOKEN_HOLDERS };

export const TESTING_MODE = true;

export const DISCORD_URL = "";
export const TWITTER_URL = "https://twitter.com/metarelics";
export const OPENSEA_URL = "https://opensea.io/collection/relics-pass"; // TODO
export const LOOKSRARE_URL = ""; // TODO
export const INSTAGRAM_URL = "https://www.instagram.com/metarelics/";
export const PRINTS_URL = "https://www.metarelics.co/";
export const RELICS_URL = ""; // https://metarelics.xyz
export const IKONICK_TWITTER_URL = "https://twitter.com/TeamIKONICK";
export const IKONICK_INSTAGRAM_URL = "https://www.instagram.com/ikonick/";

const MAINNET_CONTRACT_ADDRESS = '';
const TESTNET_CONTRACT_ADDRESS = '0xfD54efc69ecF524D6BAbc48D8A6f2c6a0858a4fC';

const RELIC_PASS_CONTRACT_ADDRESS_MAINNET = '0x1ECFDCcf97EdD64Fb73890Ca4541f306456A21eC';
const RELIC_PASS_CONTRACT_ADDRESS_TESTNET = '0x0446C9C6F541D91064d7861B9f038b75D4133F1C';

export const CONTRACT_ADDRESS = TESTING_MODE ? TESTNET_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS;
export const RELIC_PASS_CONTRACT_ADDRESS = TESTING_MODE ? RELIC_PASS_CONTRACT_ADDRESS_TESTNET : RELIC_PASS_CONTRACT_ADDRESS_MAINNET; 
export const WHITELIST_PRICE = TESTING_MODE ? 0 : 0.2;
export const WHITELIST_LIMIT = 1;
export const REGULAR_PRICE = TESTING_MODE ? 0 : 0.2;
export const REGULAR_LIMIT = 1;
export const MAX_MINT = 1000;

export const MINT_TIME = TESTING_MODE
    ? Date.now() + 5000
    : 1648234800000;