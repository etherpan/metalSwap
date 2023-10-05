import { useState, useEffect } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { useFarms, usePriceCakeBusd } from 'state/farms/hooks'
import { useAppDispatch } from 'state'
import farmsConfig from 'config/constants/farms'
import { fetchFarmsPublicDataAsync } from 'state/farms'
import { getFarmApr } from 'utils/apr'
import orderBy from 'lodash/orderBy'
import { DeserializedFarm } from 'state/types'
import { FetchStatus } from 'config/constants/types'
import { FarmWithStakedValue } from '../../Farms/components/types'
import { BIG_ZERO } from 'utils/bigNumber'
import BigNumber from 'bignumber.js'

const useGetTopFarmsByApr = (isIntersecting: boolean) => {
  const dispatch = useAppDispatch()
  const { data: farms, regularCakePerBlock } = useFarms()
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.Idle)
  const [fetched, setFetched] = useState(false)
  const [topFarms, setTopFarms] = useState<FarmWithStakedValue[]>([null, null, null, null, null])
  const [totalLP, setTotalLP] = useState("0")
  const cakePriceBusd = usePriceCakeBusd()

  useEffect(() => {
    const fetchFarmData = async () => {
      setFetchStatus(FetchStatus.Fetching)
      const activeFarms = farmsConfig
      try {
        await dispatch(fetchFarmsPublicDataAsync(activeFarms.map((farm) => farm.pid)))
        setFetchStatus(FetchStatus.Fetched)
      } catch (e) {
        console.error(e)
        setFetchStatus(FetchStatus.Failed)
      }
    }

    if (isIntersecting && fetchStatus === FetchStatus.Idle) {
      fetchFarmData()
    }
  }, [dispatch, setFetchStatus, fetchStatus, topFarms, isIntersecting])

  useEffect(() => {
    const getTopFarmsByApr = (farmsState: DeserializedFarm[]) => {
      const farmsWithPrices = farmsState.filter(
        (farm) =>
          farm.lpTotalInQuoteToken &&
          farm.quoteTokenPriceBusd &&
          // farm.pid !== 0 &&
          farm.multiplier &&
          farm.multiplier !== '0X',
      )
      let lp = BIG_ZERO
      const farmsWithApr: FarmWithStakedValue[] = farmsWithPrices.map((farm) => {
        const totalLiquidity = farm.isTokenOnly
        ? new BigNumber(farm.lpTotalInQuoteToken).times(farm.tokenPriceBusd)
        : new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceBusd)
        lp = totalLiquidity.plus(lp)
        setTotalLP(lp.toString())
        const { metRewardsApr, lpRewardsApr } = getFarmApr(
          farm.poolWeight,
          cakePriceBusd,
          totalLiquidity,
          farm.lpAddresses[ChainId.BSC],
          regularCakePerBlock,
        )
        return { ...farm, apr: metRewardsApr, lpRewardsApr }
      })

      const sortedByApr = orderBy(farmsWithApr, (farm) => farm.apr + farm.lpRewardsApr, 'desc')
      setTopFarms(sortedByApr.slice(0, 5))
      setFetched(true)
    }

    if (fetchStatus === FetchStatus.Fetched && !topFarms[0]) {
      getTopFarmsByApr(farms)
    }
  }, [setTopFarms, farms, fetchStatus, cakePriceBusd, topFarms, regularCakePerBlock])

  return { topFarms, fetchStatus, totalLP, fetched }
}

export default useGetTopFarmsByApr
