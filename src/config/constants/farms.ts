import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

// export const CAKE_BNB_LP_MAINNET = '0x717Ef9CF2cB13e414Fa567e6070a7737E0CF7C17'
export const CAKE_BNB_LP_MAINNET = '0x217FB061f0b8e44Ce71d4e5581C6ABA7FD68704E'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MET',
    lpAddresses: {
      97: '0xA0d5AcCE36Fc102c57Cd65C7b88ecC46A156dDA6',
      381931: '0x30885515b9AeCc599Dc6D48106B471EAd26dEBB0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
    isTokenOnly: true
  },
  {
    pid: 1,
    lpSymbol: 'MET-USDT LP',
    lpAddresses: {
      97: '0xA0d5AcCE36Fc102c57Cd65C7b88ecC46A156dDA6',
      381931: '0x30885515b9AeCc599Dc6D48106B471EAd26dEBB0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'MET-METAL LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      381931: CAKE_BNB_LP_MAINNET,
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-METAL LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      381931: '0xA8f8B7C0a4ec1ca9fA115dAe915e33AEDdf2526B',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  { 
    pid: 5,
    lpSymbol: 'WMETAL',
    lpAddresses: {
      97: '0xA0d5AcCE36Fc102c57Cd65C7b88ecC46A156dDA6',
      381931: '0xA8f8B7C0a4ec1ca9fA115dAe915e33AEDdf2526B',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.usdt,
    isTokenOnly: true
  },
]

export default farms
