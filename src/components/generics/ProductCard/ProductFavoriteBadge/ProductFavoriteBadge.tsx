import { useCallback, useMemo } from 'react'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'

import { Box, Button } from '@granosafe/design-system'
import { useClientSide } from 'hooks'
import { Product } from 'models/products'

import { FavoritesContext } from 'contexts/FavoritesContext'

type ProductFavoriteBadgeProps = {
  product: Product
}

const ProductFavoriteBadge = ({ product }: ProductFavoriteBadgeProps) => {
  const favoritesContextContext = FavoritesContext.useContext()

  const isClientSide = useClientSide()

  const isSelected = useMemo(
    () =>
      Boolean(
        favoritesContextContext?.favorites?.find(favorite => favorite.id === product.id)
      ),
    [favoritesContextContext?.favorites, product.id]
  )

  const handleFavoriteClick = useCallback(() => {
    if (isSelected) {
      favoritesContextContext?.removeProduct(product)

      return
    }

    favoritesContextContext?.addProduct(product)
  }, [favoritesContextContext, isSelected, product])

  if (!isClientSide) {
    return null
  }

  return (
    <Box
      position='absolute'
      right='0.8rem'
      top='0.8rem'
      data-product-slide
      {...(isSelected && { 'data-product-slide-active': true })}
      data-product-permanet-show
      bg='rgba(255, 255, 255, 0.4)'
      borderRadius='50%'
    >
      <Button
        variant='ghost'
        p='0.4rem'
        data-cy={`add-favorite-${product.id}`}
        onClick={handleFavoriteClick}
      >
        {isSelected ? (
          <HiHeart size='2.4rem' color='black' />
        ) : (
          <HiOutlineHeart size='2.4rem' color='black' />
        )}
      </Button>
    </Box>
  )
}

export default ProductFavoriteBadge
