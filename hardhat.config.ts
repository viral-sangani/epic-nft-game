import "@nomiclabs/hardhat-waffle";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    polygon: {
      allowUnlimitedContractSize: true,
      url: `https://poly-mainnet.gateway.pokt.network/v1/lb/${process.env.POCKET_TOKEN}`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
