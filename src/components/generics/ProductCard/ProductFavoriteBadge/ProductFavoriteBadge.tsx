import { useState } from 'react'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'

import { Box, Button } from '@granosafe/design-system'
import { Product } from 'models/products'

type ProductFavoriteBadgeProps = {
  product: Product
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductFavoriteBadge = ({ product }: ProductFavoriteBadgeProps) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <Box
      position='absolute'
      right='0.8rem'
      top='0.8rem'
      data-product-slide
      {...(isActive && { 'data-product-slide-active': true })}
      data-product-favorite-icon
    >
      <Button
        variant='ghost'
        p='0.4rem'
        onClick={() => setIsActive(prevState => !prevState)}
      >
        {isActive ? (
          <HiHeart size='2.4rem' color='white' />
        ) : (
          <HiOutlineHeart size='2.4rem' color='white' />
        )}
      </Button>
    </Box>
  )
}

export default ProductFavoriteBadge
