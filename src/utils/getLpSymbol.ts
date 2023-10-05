export const getLPSymbol = (token0Symbol: string, token1Symbol: string) => {
  if (token0Symbol === 'WMETAL') {
    return `METAL-${token1Symbol} LP`
  }
  if (token1Symbol === 'WMETAL') {
    return `${token0Symbol}-METAL LP`
  }
  return `${token0Symbol}-${token1Symbol} LP`
}
