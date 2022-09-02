import { Box } from '@granosafe/design-system'

import ProductsView from 'components/templates/ProductsView/ProductsView'

import { products } from './prod.mock'

const Home = () => {
  return (
    <Box p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
      <ProductsView products={products} />
    </Box>
  )
}

export default Home
