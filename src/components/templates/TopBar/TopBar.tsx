import Link from 'next/link'

import { Flex, A } from '@granosafe/design-system'
import { useTranslate } from 'hooks'
import { HomeRoutes } from 'routes/home'
import { MarketplaceRoutes } from 'routes/marketplace'

import NavButton from 'components/generics/NavButton'
import BrandLogo from 'components/icons/BrandLogo'

import { TOP_BAR_HEIGHT } from 'constants/layout'

const TopBar = () => {
  const { t } = useTranslate()

  return (
    <Flex variant='vAlign' h={TOP_BAR_HEIGHT} p='0 2.4rem'>
      <Flex as='nav' variant='vAlign' gap='2.4rem'>
        <Link href={HomeRoutes.ROOT} passHref>
          <A>
            <BrandLogo />
          </A>
        </Link>
        <Flex as='ul' ml='-0.8rem' gap='1.4rem'>
          <NavButton
            href={MarketplaceRoutes.FEMININE}
            text={t('content.label.feminine')}
          />
          <NavButton
            href={MarketplaceRoutes.MASCULINE}
            text={t('content.label.masculine')}
          />
          <NavButton
            href={MarketplaceRoutes.ACCESSORIES}
            text={t('content.label.accessories')}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TopBar
