import Head from 'next/head'

import { Box } from '@granosafe/design-system'
import { useTranslate } from 'hooks'

import FadeIn from 'components/generics/FadeIn'
import ProductsView from 'components/templates/ProductsView/ProductsView'

import { BUSINESS_NAME } from 'constants/company'

import { products } from 'mocks/accessories-products.mock'

const Accessories = () => {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>
          {t('content.label.accessories')} | {BUSINESS_NAME}
        </title>
      </Head>
      <FadeIn>
        <Box p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
          <ProductsView products={products} />
        </Box>
      </FadeIn>
    </>
  )
}

export default Accessories
