import { isL2DataDev } from "./src/util";
import { CHAIN_ID } from "./src/config";

export default {
  // l2BaseUrl: isProd() ? 'https://l2api.orbiter.finance' : 'http://datastation.joeyzhou.xyz',
  l2BaseUrl: isL2DataDev() ? 'http://datastation.joeyzhou.xyz' : 'https://l2api.orbiter.finance',
  metaMaskNetworkId: {
    [CHAIN_ID.starknet]: 1,
    [CHAIN_ID.dydx]: 1,
    [CHAIN_ID.loopring]: 1,
    [CHAIN_ID.zkspace]: 1,
    [CHAIN_ID.imx]: 1,
    [CHAIN_ID.zksync]: 1,

    [CHAIN_ID.starknet_test]: 5,
    [CHAIN_ID.dydx_test]: 5,
    [CHAIN_ID.loopring_test]: 5,
    [CHAIN_ID.zkspace_test]: 5,
    [CHAIN_ID.imx_test]: 5,
    [CHAIN_ID.zksync_test]: 5,
  },
  txExploreUrl: {
    [CHAIN_ID.zksync]: 'https://zkscan.io/explorer/transactions/',
    [CHAIN_ID.zksync_test]: 'https://goerli.zkscan.io/explorer/transactions/',
    [CHAIN_ID.dydx]: 'https://trade.dydx.exchange/',
    [CHAIN_ID.dydx_test]: 'https://trade.stage.dydx.exchange/',
    [CHAIN_ID.imx_test]: 'https://api.sandbox.x.immutable.com/v1/transfers/',
    [CHAIN_ID.zkspace]: 'https://zkspace.info/transaction/',
    [CHAIN_ID.zkspace_test]: 'https://v3-rinkeby.zkswap.info/transaction/'
  },
  accountExploreUrl: {
    [CHAIN_ID.zksync]: 'https://zkscan.io/explorer/accounts/',
    [CHAIN_ID.zksync_test]: 'https://goerli.zkscan.io/explorer/accounts/',
    [CHAIN_ID.starknet]: 'https://voyager.online/contract/',
    [CHAIN_ID.starknet_test]: 'https://goerli.voyager.online/contract/',
    [CHAIN_ID.imx]: 'https://market.immutable.com/inventory/',
    [CHAIN_ID.imx_test]: 'https://api.sandbox.x.immutable.com/v1/transfers/',
    [CHAIN_ID.loopring]: 'https://explorer.loopring.io/account/',
    [CHAIN_ID.loopring_test]: 'https://explorer.loopring.io/account/',
    [CHAIN_ID.dydx]: 'https://trade.dydx.exchange/',
    [CHAIN_ID.dydx_test]: 'https://trade.stage.dydx.exchange/',
    [CHAIN_ID.zkspace]: 'https://zkspace.info/account/',
    [CHAIN_ID.zkspace_test]: 'https://v3-rinkeby.zkswap.info/account/'
  },
  gasPriceMap: {
    [CHAIN_ID.mainnet]: 100,
    [CHAIN_ID.ar]: 1.9,
    [CHAIN_ID.zksync]: 100,
    [CHAIN_ID.starknet]: 100,
    [CHAIN_ID.po]: 60,
    [CHAIN_ID.op]: 0.001,
    [CHAIN_ID.imx]: 1.7,
    [CHAIN_ID.loopring]: 100
  },
  gasLimitMap: {
    [CHAIN_ID.mainnet]: 35000,
    [CHAIN_ID.ar]: 810000,
    [CHAIN_ID.zksync]: 100,
    [CHAIN_ID.starknet]: 35000,
    [CHAIN_ID.po]: 1500,
    [CHAIN_ID.op]: 21000,
    [CHAIN_ID.imx]: 51000,
    [CHAIN_ID.loopring]: 75000,
    [CHAIN_ID.dydx]: 100000,
    [CHAIN_ID.zkspace]: 646496,
    [CHAIN_ID.zksync2]: 10560,
    [CHAIN_ID.bsc]: 150000,
    [CHAIN_ID.nova]: 150000,
    [CHAIN_ID.pozkevm]: 300000
  }
};
