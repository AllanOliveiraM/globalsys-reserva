/* eslint-disable react/jsx-no-useless-fragment */

import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi'

import { Flex, Box, Button, Text, Modal, Card } from '@granosafe/design-system'
import { motion, useAnimationControls } from 'framer-motion'
import { useClientSide, useTranslate } from 'hooks'

import ActionButton from 'components/generics/ActionButton'
import ProductInfo from 'components/generics/ProductCard/ProductInfo'
import CatAndGirl from 'components/icons/CatAndGirl'

import { ShoppingBagContext } from 'contexts/ShoppingBagContext'

import { TOP_BAR_HEIGHT } from 'constants/layout'
import { currency, getPercentage, subtractPercentage } from 'utils/formatters'

import { customTheme } from 'theme/theme'

const Bag = () => {
  const { t } = useTranslate()
  const isClient = useClientSide()

  const bag = ShoppingBagContext.useSelector(state => state?.bag || null)
  const removeProduct = ShoppingBagContext.useSelector(
    state => state?.removeProduct || null
  )

  const controls = useAnimationControls()

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

  useEffect(() => {
    controls.start({
      y: [-6, 0],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bag?.length])

  return (
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
          <Box w='90rem' maxWidth='100%' maxHeight={`calc(80vh - ${TOP_BAR_HEIGHT})`}>
            <Flex justifyContent='space-between' w='100%'>
              <Text variant='subheading'>{t('content.title.your_bag_content')}</Text>
              <Button variant='ghost' onClick={() => setIsOpen(false)}>
                <AiFillCloseCircle size='3rem' color={customTheme.colors.grey500} />
              </Button>
            </Flex>
            <Box overflowY='auto' maxHeight={`calc(80vh - (${TOP_BAR_HEIGHT} * 2))`}>
              {bag?.length ? (
                <Flex
                  flexDirection='column'
                  gap='2rem 4rem'
                  as='ul'
                  mt='2.4rem'
                  display='grid'
                  gridTemplateColumns={{ _: '1fr', lg: '1fr 1fr' }}
                  p='0 2.4rem'
                  minHeight='40vh'
                >
                  {bag.map(product => {
                    const src = product?.imageSrc?.[0]?.src

                    return (
                      <Box as='li' key={product.id}>
                        <Flex
                          as={Card}
                          p='1.8rem 1.8rem 1.8rem 0rem !important'
                          w='100%'
                          justifyContent='space-between'
                          maxHeight='12rem'
                          variant='vAlign'
                        >
                          <Button
                            ml='1.2rem'
                            mr='0.8rem'
                            variant='ghost'
                            onClick={() => {
                              if (removeProduct) {
                                removeProduct(product)
                              }
                            }}
                          >
                            <FiX size='3rem' color={customTheme.colors.primary} />
                          </Button>

                          <Box>
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
                      </Box>
                    )
                  })}
                </Flex>
              ) : (
                <Flex flexDirection='column' variant='center' minHeight='42.5vh'>
                  <Flex variant='center' flexDirection='column' gap='2.4rem'>
                    <CatAndGirl />
                    <Text maxWidth={{ _: '20rem', lg: '40rem' }} textAlign='center'>
                      {t('content.title.nothing_here_bag')}
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
        <ActionButton onClick={() => setIsOpen(prevState => !prevState)} ref={excludeRef}>
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
  )
}

export default Bag
