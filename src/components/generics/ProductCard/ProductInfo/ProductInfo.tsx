import { Flex, Text, FlexProps } from '@granosafe/design-system'
import { Product } from 'models/products'

import { currency, subtractPercentage } from 'utils/formatters'

type ProductInfoProps = {
  product: Product
} & FlexProps

const ProductInfo = ({ product, ...props }: ProductInfoProps) => {
  if (product.discountPercent) {
    return (
      <Flex variant='vAlign' gap='1.2rem' flexWrap='wrap' mr='1rem' {...props}>
        <Text textDecoration='line-through' fontSize='1.5rem !important'>
          {currency(product.price)}
        </Text>

        <Text fontSize='1.5rem !important'>
          {currency(subtractPercentage(product.price, product.discountPercent))}
        </Text>
      </Flex>
    )
  }

  return <Text fontSize='1.5rem !important'>{currency(product.price)}</Text>
}

export default ProductInfo
