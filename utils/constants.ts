// Add your smart contract address here
export const GAME_CONTRACT_ADDRESS =
  "0xd837024a99ADDd7714bDaea62Df12836bCAEe448";
export const TOKEN_CONTRACT_ADDRESS =
  "0xa8A096C12d3A0cf4cdb76a0dAaa892ACdF29F250";

export const RINKBY_MAINNET_PARAMS = {
  chainId: "0x04",
  chainName: "Rinkeby Test Network",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
  blockExplorerUrls: ["https://rinkeby.etherscan.io"],
};

export const POLYGON_MAINNET_PARAMS = {
  chainId: "0x89",
  chainName: "Polygon Network",
  nativeCurrency: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: [
    `https://poly-mainnet.gateway.pokt.network/v1/lb/${process.env.POCKET_TOKEN}`,
  ],
  blockExplorerUrls: ["https://polygonscan.com/"],
};

export const CHAIN_ID = "0x89";
export const CHAIN_ID_INT = 137;
