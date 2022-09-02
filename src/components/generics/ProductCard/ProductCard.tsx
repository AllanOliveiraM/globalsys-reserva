import { Box, Text } from '@granosafe/design-system'
import { Product } from 'models/products'

import ImageSlider from './ImageSlider'
import styles from './ProductCard.module.scss'
import ProductDiscountBadge from './ProductDiscountBadge'
import ProductFavoriteBadge from './ProductFavoriteBadge'
import ProductInfo from './ProductInfo'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
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

      <Box mt='1.2rem' mb='1.8rem'>
        <Text fontSize='1.5rem !important' fontWeight='bold'>
          {product.name}
        </Text>

        <ProductInfo product={product} />
      </Box>
    </Box>
  )
}

export default ProductCard
