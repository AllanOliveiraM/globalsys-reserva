import Head from 'next/head'

import { Box } from '@granosafe/design-system'
import { useTranslate } from 'hooks'

import FadeIn from 'components/generics/FadeIn'
import ProductsView from 'components/templates/ProductsView/ProductsView'

import { BUSINESS_NAME } from 'constants/company'

import { products } from 'mocks/feminine-products.mock'

const Feminine = () => {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>
          {t('content.label.feminine')} | {BUSINESS_NAME}
        </title>
      </Head>
      <FadeIn>
        <Box data-cy='page-feminine' p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
          <ProductsView products={products} />
        </Box>
      </FadeIn>
    </>
  )
}

export default Feminine
