import { CurrencyAmount, JSBI } from '@pancakeswap/sdk'
import { maxAmountSpend } from './maxAmountSpend'

describe('maxAmountSpend', () => {
  it('should be undefined if no input', () => {
    expect(maxAmountSpend()).toBeUndefined()
  })

  it('should has value when CurrencyAmount is METAL and CurrencyAmount is higher than min metal', () => {
    expect(
      JSBI.greaterThan(
        maxAmountSpend(CurrencyAmount.ether(JSBI.exponentiate(JSBI.BigInt(100), JSBI.BigInt(16)))).raw,
        JSBI.BigInt(0),
      ),
    ).toBeTruthy()
  })

  it('should be 0 when CurrencyAmount is METAL and CurrencyAmount is low', () => {
    expect(JSBI.equal(maxAmountSpend(CurrencyAmount.ether('0')).raw, JSBI.BigInt(0))).toBeTruthy()
  })
})
