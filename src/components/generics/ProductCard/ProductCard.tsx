import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { Box, Button, Flex, Text } from '@granosafe/design-system'
import { useClientSide, useTranslate } from 'hooks'
import { Product } from 'models/products'

import { ShoppingBagContext } from 'contexts/ShoppingBagContext'

import { DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME } from 'constants/layout'

import ImageSlider from './ImageSlider'
import styles from './ProductCard.module.scss'
import ProductDiscountBadge from './ProductDiscountBadge'
import ProductFavoriteBadge from './ProductFavoriteBadge'
import ProductInfo from './ProductInfo'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [currentShowingKey, setCurrentShowingKey] = useState<number>(1)

  const lastKey = useMemo(() => product.imageSrc.slice()?.pop()?.key || 0, [product])

  const shoppingBagContext = ShoppingBagContext.useContext()

  const itsInTheBag = Boolean(shoppingBagContext?.bag?.find(bag => bag.id === product.id))

  const { t } = useTranslate()

  const isClient = useClientSide()

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        return
      }

      setCurrentShowingKey(prevState => {
        if (prevState < lastKey) {
          return prevState + 1
        }

        return 1
      })
    }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME)

    return () => {
      clearInterval(interval)
    }
  }, [isAnimating, lastKey, product.imageSrc])

  return (
    <Box
      className={styles.productCardContainer}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => {
        setIsAnimating(false)

        setTimeout(() => {
          setCurrentShowingKey(1)
        }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME / 2)
      }}
      onTouchStart={() => setIsAnimating(true)}
      onTouchEnd={() => {
        setIsAnimating(false)

        setTimeout(() => {
          setCurrentShowingKey(1)
        }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME / 2)
      }}
      onTouchMoveCapture={() => setIsAnimating(true)}
      onTouchCancelCapture={() => {
        setIsAnimating(false)

        setTimeout(() => {
          setCurrentShowingKey(1)
        }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME / 2)
      }}
    >
      <Box
        position='relative'
        h={{
          _: '69vw',
          md: '48vw',
          xl: '35vw',
        }}
      >
        <ImageSlider
          product={product}
          currentShowingKey={currentShowingKey}
          isAnimating={isAnimating}
          lastKey={lastKey}
        />

        <ProductFavoriteBadge product={product} />
        {product.discountPercent ? <ProductDiscountBadge product={product} /> : null}
      </Box>

      <Flex
        variant='vAlign'
        justifyContent='space-between'
        w='100%'
        h='unset'
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <Box mt='1.2rem' mb='1.8rem' minHeight={{ _: '8rem', md: 'unset' }}>
          <Text fontSize='1.5rem !important' fontWeight='bold'>
            {product.name}
          </Text>

          <ProductInfo product={product} />
        </Box>

        <Button
          mb={{ _: '2.4rem', md: '0' }}
          ml='1.2rem'
          data-cy={`put-in-bag-${product.id}`}
          data-product-slide
          data-product-permanet-show
          variant='ghost'
          onClick={() => {
            if (!itsInTheBag) {
              shoppingBagContext?.addProduct(product)
              toast.success(t('product.dialog.added_to_bag'))
            } else {
              shoppingBagContext?.removeProduct(product)
              toast.info(t('product.dialog.removed_from_bag'))
            }
          }}
        >
          {isClient ? (
            <Text
              fontSize='1.4rem !important'
              p='1rem 0.8rem'
              boxShadow='md'
              color='primary'
              borderColor='primary'
              borderWidth='1px'
              borderRadius='2px'
              minWidth='8rem'
            >
              {!itsInTheBag ? t('content.label.i_want') : t('content.label.remove')}
            </Text>
          ) : null}
        </Button>
      </Flex>
    </Box>
  )
}

export default ProductCard
