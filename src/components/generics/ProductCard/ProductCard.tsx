import { toast } from 'react-toastify'

import { Box, Button, Flex, Text } from '@granosafe/design-system'
import { useClientSide, useTranslate } from 'hooks'
import { Product } from 'models/products'

import { ShoppingBagContext } from 'contexts/ShoppingBagContext'

import ImageSlider from './ImageSlider'
import styles from './ProductCard.module.scss'
import ProductDiscountBadge from './ProductDiscountBadge'
import ProductFavoriteBadge from './ProductFavoriteBadge'
import ProductInfo from './ProductInfo'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const shoppingBagContext = ShoppingBagContext.useContext()

  const itsInTheBag = Boolean(shoppingBagContext?.bag?.find(bag => bag.id === product.id))

  const { t } = useTranslate()

  const isClient = useClientSide()

  return (
    <Box className={styles.productCardContainer}>
      <Box
        position='relative'
        h={{
          _: '65vw',
          md: '42vw',
          xl: '30vw',
        }}
      >
        <ImageSlider product={product} />

        <ProductFavoriteBadge product={product} />
        {product.discountPercent ? <ProductDiscountBadge product={product} /> : null}
      </Box>

      <Flex
        variant='vAlign'
        justifyContent='space-between'
        w='100%'
        h='unset'
        flexDirection={{ _: 'column', sm: 'row' }}
      >
        <Box mt='1.2rem' mb='1.8rem'>
          <Text fontSize='1.5rem !important' fontWeight='bold'>
            {product.name}
          </Text>

          <ProductInfo product={product} />
        </Box>

        <Button
          mb={{ _: '2.4rem', sm: '0' }}
          data-product-slide
          variant='ghost'
          onClick={() => {
            if (!itsInTheBag) {
              shoppingBagContext?.addProduct(product)
              toast.success(t('prduct.dialog.added_to_bag'))
            } else {
              shoppingBagContext?.removeProduct(product)
              toast.info(t('prduct.dialog.removed_from_bag'))
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
