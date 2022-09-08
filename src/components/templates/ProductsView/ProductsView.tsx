/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from '@nexpy/design-system'
import { Product } from 'models/products'

import ProductCard from 'components/generics/ProductCard'

type ProductsViewProps = {
  products: Product[]
}

const ProductsView = ({ products }: ProductsViewProps) => (
  <Flex justifyContent='center' mt='2.4rem' mb='4.8rem'>
    <Flex
      w='100%'
      display='grid'
      gridTemplateColumns={{
        _: '1fr 1fr',
        md: '1fr 1fr 1fr',
        xl: '1fr 1fr 1fr 1fr',
      }}
      gap='0.8rem'
    >
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  </Flex>
)

export default ProductsView
