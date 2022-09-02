import { Box, Text } from '@granosafe/design-system'
import { motion, useAnimationControls } from 'framer-motion'
import isNumber from 'is-number'
import { Product } from 'models/products'

import { DEFAULT_BAGDES_TRANSITION_TIME } from 'constants/layout'

type ProductDiscountBadgeProps = {
  product: Product
}

const ProductDiscountBadge = ({ product }: ProductDiscountBadgeProps) => {
  const controls = useAnimationControls()

  if (isNumber(product.discountPercent)) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        onViewportEnter={() => {
          setTimeout(() => {
            controls.start({ opacity: 1 })
          }, DEFAULT_BAGDES_TRANSITION_TIME)
        }}
        animate={controls}
      >
        <Box
          borderRadius='1rem'
          position='absolute'
          top='1.2rem'
          left='1.2rem'
          p='0.3rem 1.4rem'
          bg='white'
        >
          <Text variant='caption' fontWeight='bold'>
            {product.discountPercent}% OFF
          </Text>
        </Box>
      </motion.div>
    )
  }

  return null
}

export default ProductDiscountBadge
