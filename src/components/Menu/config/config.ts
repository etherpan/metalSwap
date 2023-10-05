/* eslint-disable */
import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  ArrowUpDownIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const filterItemBySupportChainId = (item, chainId) => {
  return !chainId || !item.supportChainIds ? true : item.supportChainIds?.includes(chainId)
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        // {
        //   label: t('Limit'),
        //   href: '/limit-orders',
        //   supportChainIds: [ChainId.BSC],
        // },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        // {
        //   label: t('Perpetual'),
        //   href: `https://perp.metswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
        //     isDark,
        //   )}`,
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        // {
        //   label: t('Transfer'),
        //   href: '/transfer',
        // },
      ].filter((item) => filterItemBySupportChainId(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: [ChainId.BSC],
      items: [
        {
          label: t('Farms'),
          href: '/farms',
        },
        {
          label: t('Pools'),
          href: '/pools',
        },
      ],
    },
    // {
    //   label: t('Bridge'),
    //   href: 'https://bridge.metswap.finance/',
    //   icon: ArrowUpDownIcon,
    //   supportChainIds: [ChainId.BSC],
    //   items: [
    //     // {
    //     //   label: t('Farms'),
    //     //   href: '/farms',
    //     // },
    //     // {
    //     //   label: t('Pools'),
    //     //   href: '/pools',
    //     // },
    //   ],
    // },
    // {
    //   label: t('Launchpad'),
    //   href: '/launchpad',
    //   icon: NftIcon,
    //   fillIcon: NftFillIcon,
    //   supportChainIds: [ChainId.BSC],
    //   items: [
    //     // {
    //     //   label: t('Farms'),
    //     //   href: '/farms',
    //     // },
    //     // {
    //     //   label: t('Pools'),
    //     //   href: '/pools',
    //     // },
    //   ],
    // },
  ].filter((item) => filterItemBySupportChainId(item, chainId))

export default config
