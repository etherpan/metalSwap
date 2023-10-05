import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.metswap.finance/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.metswap.finance/brand',
      },
      {
        label: t('Community'),
        href: 'https://docs.metswap.finance/contact-us/telegram',
      },
      {
        label: '—',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.metswap.finance/contact-us/customer-support',
      },
      {
        label: t('Guides'),
        href: 'https://docs.metswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/metswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.metswap.finance/',
      },
      {
        label: t('Audits'),
        href: 'https://www.rdauditors.com/audits/',
      },
    ],
  },
]
