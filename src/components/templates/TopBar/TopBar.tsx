/* eslint-disable react/jsx-no-useless-fragment */

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineShoppingBag, HiOutlineHeart, HiShoppingBag } from 'react-icons/hi'

import { Flex, A, Box, Button, Modal, Text, Card } from '@granosafe/design-system'
import { motion, useAnimationControls } from 'framer-motion'
import { useClientSide, useTranslate } from 'hooks'
import { HomeRoutes } from 'routes/home'
import { MarketplaceRoutes } from 'routes/marketplace'

import ActionButton from 'components/generics/ActionButton'
import NavButton from 'components/generics/NavButton'
import ProductInfo from 'components/generics/ProductCard/ProductInfo'
import BrandFullLogo from 'components/icons/BrandFullLogo'
import CatAndGirl from 'components/icons/CatAndGirl'

import { ShoppingBagContext } from 'contexts/ShoppingBagContext'

import { TOP_BAR_HEIGHT } from 'constants/layout'
import { currency, getPercentage, subtractPercentage } from 'utils/formatters'

import { customTheme } from 'theme/theme'

const TopBar = () => {
  const { t } = useTranslate()

  const bag = ShoppingBagContext.useSelector(state => state?.bag || null)

  const totalPrice = currency(
    bag?.reduce((acc, product) => {
      if (product.discountPercent) {
        return acc + subtractPercentage(product.price, product.discountPercent)
      }

      return acc + product.price
    }, 0) || 0
  )

  const totalSavedPrice = currency(
    bag?.reduce((acc, product) => {
      if (product.discountPercent) {
        return acc + getPercentage(product.price, product.discountPercent)
      }

      return acc
    }, 0) || 0
  )

  const isClient = useClientSide()
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      y: [-6, 0],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bag?.length])

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
            <Button variant='ghost'>
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
                <BrandFullLogo width='14rem' />
              </A>
            </Link>
          </Box>

          <Flex as='ul' ml='-0.8rem' gap='1.4rem' display={{ _: 'none', sm: 'flex' }}>
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
          <ActionButton>
            <HiOutlineHeart size='2rem' />
          </ActionButton>
          <Modal
            mt={TOP_BAR_HEIGHT}
            backgroundProps={{ position: 'fixed !important' }}
            render={({ setIsOpen, isOpen }) => (
              <>
                {isOpen ? (
                  <Head key='modal'>
                    <style>
                      {`
                        html {
                          overflow: hidden;
                        }
                      `}
                    </style>
                  </Head>
                ) : null}
                <Box
                  w='90rem'
                  maxWidth='100%'
                  maxHeight={`calc(80vh - ${TOP_BAR_HEIGHT})`}
                >
                  <Flex justifyContent='space-between' w='100%'>
                    <Text variant='subheading'>
                      {t('content.title.your_bag_content')}
                    </Text>
                    <Button variant='ghost' onClick={() => setIsOpen(false)}>
                      <AiFillCloseCircle size='3rem' color={customTheme.colors.grey500} />
                    </Button>
                  </Flex>
                  <Box
                    overflowY='auto'
                    maxHeight={`calc(80vh - (${TOP_BAR_HEIGHT} * 2))`}
                  >
                    {bag?.length ? (
                      <Flex
                        flexDirection='column'
                        gap='2rem 4rem'
                        as='ul'
                        mt='2.4rem'
                        display='grid'
                        gridTemplateColumns={{ _: '1fr', lg: '1fr 1fr' }}
                        p='0 2.4rem'
                        minHeight='30vh'
                      >
                        {bag.map(product => {
                          const src = product?.imageSrc?.[0]?.src

                          return (
                            <Flex
                              as={Card}
                              key={product.id}
                              w='100%'
                              justifyContent='space-between'
                              maxHeight='10rem'
                              variant='vAlign'
                            >
                              <Box as='li'>
                                <Text
                                  maxWidth={{ _: '40vw', lg: '26rem' }}
                                  textOverflow='ellipsis'
                                  whiteSpace='nowrap'
                                  overflow='hidden'
                                >
                                  {product.name}
                                </Text>

                                <ProductInfo product={product} />
                              </Box>
                              {src ? (
                                <Box position='relative' w='6rem' h='9rem'>
                                  <Image
                                    style={{ borderRadius: '9px' }}
                                    src={src}
                                    alt={product.name}
                                    layout='fill'
                                    priority
                                    objectFit='cover'
                                    objectPosition='top'
                                    draggable={false}
                                  />
                                </Box>
                              ) : (
                                <Box position='relative' w='6rem' h='9rem'>
                                  <Image
                                    style={{ borderRadius: '9px' }}
                                    src='/images/app/noimg.png'
                                    alt={product.name}
                                    layout='fill'
                                    priority
                                    objectFit='cover'
                                    objectPosition='top'
                                    draggable={false}
                                  />
                                </Box>
                              )}
                            </Flex>
                          )
                        })}
                      </Flex>
                    ) : (
                      <Flex flexDirection='column' variant='center' minHeight='40vh'>
                        <Flex variant='center' flexDirection='column' gap='2.4rem'>
                          <CatAndGirl />
                          <Text maxWidth={{ _: '20rem', lg: '40rem' }} textAlign='center'>
                            {t('content.title.nothing_here')}
                          </Text>
                        </Flex>
                      </Flex>
                    )}

                    <Flex
                      mt='4.8rem'
                      justifyContent='space-between'
                      variant='vAlign'
                      p='0 2.4rem 2.4rem 2.4rem'
                    >
                      <Box>
                        <Text variant='subheading'>
                          {t('content.title.total_price')}
                          &nbsp;
                          {totalPrice}
                        </Text>
                        <Text variant='caption'>
                          {t('content.title.total_discount')}
                          &nbsp;
                          {totalSavedPrice}
                        </Text>
                      </Box>
                      <Button
                        variant='outlined'
                        colorMode='safe'
                        disabled={Boolean(!bag?.length)}
                      >
                        {t('content.title.finish')}
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </>
            )}
          >
            {({ setIsOpen, excludeRef }) => (
              <ActionButton
                onClick={() => setIsOpen(prevState => !prevState)}
                ref={excludeRef}
              >
                {isClient && (
                  <>
                    {bag?.length ? (
                      <motion.div
                        animate={controls}
                        transition={{ type: 'spring', duration: 0.4 }}
                      >
                        <HiShoppingBag size='2rem' color={customTheme.colors.primary} />
                      </motion.div>
                    ) : (
                      <HiOutlineShoppingBag size='2rem' color='black' />
                    )}
                  </>
                )}
              </ActionButton>
            )}
          </Modal>
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
