import "@nomiclabs/hardhat-waffle";
import dotenv from "dotenv";
import { task } from "hardhat/config";
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

dotenv.config({ path: ".env.local" });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
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
  },
};
