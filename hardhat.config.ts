import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
require("dotenv").config();

const { PRIVATE_KEY }: any = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    hardhat: {},
    PolygonMumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
