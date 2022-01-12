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
    avaxFujiTestnet: {
      allowUnlimitedContractSize: true,
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    rinkby: {
      allowUnlimitedContractSize: true,
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
