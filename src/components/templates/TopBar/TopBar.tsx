import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

import { Flex, A, Box, Button } from '@nexpy/design-system'
import { useTranslate } from 'hooks'
import { HomeRoutes } from 'routes/home'
import { MarketplaceRoutes } from 'routes/marketplace'

import LocaleSwitch from 'components/generics/LocaleSwitch'
import NavButton from 'components/generics/NavButton'
import BrandFullLogo from 'components/icons/BrandFullLogo'

import { MenuContext } from 'contexts/MenuContext'

import { TOP_BAR_HEIGHT } from 'constants/layout'

import { customTheme } from 'theme/theme'

import Bag from './Bag'
import Favorites from './Favorites'

const TopBar = () => {
  const { t } = useTranslate()

  const { setIsOpened } = MenuContext.useContext()

  return (
    <>
      <Flex
        variant='vAlign'
        h={TOP_BAR_HEIGHT}
        p='0 2.4rem'
        justifyContent='space-between'
        position='fixed'
        bg='white'
        zIndex='1'
        top='0'
        left='0'
        right='0'
        boxShadow='default'
      >
        <Flex as='nav' variant='vAlign' gap='2.4rem'>
          <Box display={{ _: 'unset', sm: 'none' }}>
            <Button variant='ghost' onClick={() => setIsOpened(true)}>
              <FiMenu color={customTheme.colors.primary} size='3.4rem' />
            </Button>
          </Box>

          <Box display={{ _: 'unset', sm: 'none' }}>
            <Link href={HomeRoutes.ROOT} passHref>
              <A>
                <BrandFullLogo width='16rem' />
              </A>
            </Link>
          </Box>

          <Box display={{ _: 'none', sm: 'unset', xl: 'none' }}>
            <Link href={HomeRoutes.ROOT} passHref>
              <A>
                <BrandFullLogo width={{ _: '11rem', md: '14rem' }} />
              </A>
            </Link>
          </Box>

          <Flex
            as='ul'
            ml='-0.8rem'
            gap={{ _: '0.4rem', md: '1.2rem' }}
            display={{ _: 'none', sm: 'flex' }}
          >
            <NavButton href={HomeRoutes.ROOT} text={t('content.label.home')} />
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

        <Flex gap='1rem'>
          <LocaleSwitch />

          <Favorites />

          <Bag />
        </Flex>
      </Flex>

      <Box
        display={{ _: 'none', xl: 'unset' }}
        position='fixed'
        zIndex='2'
        left='50%'
        top={`calc((${TOP_BAR_HEIGHT} / 2) - 1.15rem)`}
        ml='-8rem'
      >
        <Link href={HomeRoutes.ROOT} passHref>
          <A>
            <BrandFullLogo width='16rem' />
          </A>
        </Link>
      </Box>

      <Box h={TOP_BAR_HEIGHT} />
    </>
  )
}

export default TopBar
