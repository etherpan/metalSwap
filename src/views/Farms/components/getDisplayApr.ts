export const getDisplayApr = (metRewardsApr?: number, lpRewardsApr?: number) => {
  if (metRewardsApr && lpRewardsApr) {
    return (metRewardsApr + lpRewardsApr).toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  if (metRewardsApr) {
    return metRewardsApr.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  return null
}
