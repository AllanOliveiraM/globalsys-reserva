import { Box } from '@granosafe/design-system'

import FadeIn from 'components/generics/FadeIn'
import ProductsView from 'components/templates/ProductsView/ProductsView'

import { products } from 'mocks/accessories-products.mock'

const Accessories = () => (
  <FadeIn>
    <Box p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
      <ProductsView products={products} />
    </Box>
  </FadeIn>
)

export default Accessories
