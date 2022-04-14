require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_RPC_URL)
      },
      network_id: '4',
      skipDryRun: true,
    },

/*     rinkeby: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: MNEMONIC
          },
          providerOrUrl: RINKEBY_RPC_URL,
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: '4',
    }, */


    mumbai: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.MUMBAI_RPC_URL)
      },
      network_id: '80001',
      skipDryRun: true,
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(process.env.MAINNET_MNEMONIC, process.env.MAINNET_RPC_URL)
      },
      network_id: '1',
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.8.7',
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}
