import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    381931: '0xA0d5AcCE36Fc102c57Cd65C7b88ecC46A156dDA6',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 381931)`, () => {
    const expected = address[381931]
    expect(getAddress(address, 381931)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    const expected = address[97]
    expect(getAddress(address, 97)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    const expected = address[381931]
    expect(getAddress(address, 31337)).toEqual(expected)
  })
})
