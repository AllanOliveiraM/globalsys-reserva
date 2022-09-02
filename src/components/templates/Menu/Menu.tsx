import { useCallback } from 'react'
import { FiX } from 'react-icons/fi'
import { useSwipeable } from 'react-swipeable'

import { Box, Button, Flex } from '@granosafe/design-system'
import { motion } from 'framer-motion'
import { useTranslate } from 'hooks'
import { HomeRoutes } from 'routes/home'
import { MarketplaceRoutes } from 'routes/marketplace'

import NavButton from 'components/generics/NavButton'
import BrandLogo from 'components/icons/BrandLogo'

import { MenuContext } from 'contexts/MenuContext'

import { TOP_BAR_HEIGHT } from 'constants/layout'

import { customTheme } from 'theme/theme'

import styles from './Menu.module.scss'
import { Container, ContainerBackground } from './styles'

const containerBackgroundMotionVariants = {
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
  visible: {
    opacity: 0.6,
    display: 'block',
  },
}

const containerMotionVariants = {
  hidden: { left: '-28.5rem' },
  visible: { left: 0 },
}

const closeMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Menu = () => {
  const { isOpened, setIsOpened } = MenuContext.useContext()

  const { t } = useTranslate()

  const handleCloseMenu = useCallback(() => {
    setIsOpened(false)
  }, [setIsOpened])

  const swipeOpenHandlers = useSwipeable({
    onSwipedRight: () => setIsOpened(true),
  })

  const swipeBackgroundCloseHandlers = useSwipeable({
    onSwipedLeft: () => setIsOpened(false),
  })

  const swipeMenuCloseHandlers = useSwipeable({
    onSwipedLeft: () => setIsOpened(false),
  })

  return (
    <>
      <Box
        {...swipeOpenHandlers}
        position='absolute'
        top={TOP_BAR_HEIGHT}
        bottom='0'
        left='0'
        w='3.6rem'
        bg='transparent'
        display={{ _: 'initial', md: 'none' }}
        zIndex='9'
      />

      <motion.div
        initial='hidden'
        animate={isOpened ? 'visible' : 'hidden'}
        variants={containerBackgroundMotionVariants}
        className={styles.motionBackground}
      >
        <ContainerBackground
          display={{ _: 'initial', md: 'none' }}
          onClick={handleCloseMenu}
          {...swipeBackgroundCloseHandlers}
        />
      </motion.div>

      <Container {...swipeMenuCloseHandlers}>
        <motion.div
          className='menu-content'
          initial='hidden'
          animate={isOpened ? 'visible' : 'hidden'}
          variants={containerMotionVariants}
        >
          <Box
            position='absolute'
            top='1.2rem'
            right='1.2rem'
            display={{ _: 'initial', md: 'none' }}
          >
            <Button
              data-cy='menu-btn-close'
              onClick={handleCloseMenu}
              variant='ghost'
              aria-label={t('content.label.menu')}
            >
              <motion.div
                initial='hidden'
                animate={isOpened ? 'visible' : 'hidden'}
                variants={closeMotionVariants}
              >
                <FiX size='3rem' color={customTheme.colors.grey500} />
              </motion.div>
            </Button>
          </Box>
          <Flex as='ul' ml='-0.8rem' gap='1.4rem' flexDirection='column'>
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
          <Box position='absolute' bottom='2.4rem' left='2.4rem'>
            <BrandLogo />
          </Box>
        </motion.div>
      </Container>
    </>
  )
}

export default Menu
