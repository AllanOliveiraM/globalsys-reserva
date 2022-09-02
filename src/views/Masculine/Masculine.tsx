import Head from 'next/head'

import { Box } from '@granosafe/design-system'
import { useTranslate } from 'hooks'

import FadeIn from 'components/generics/FadeIn'
import ProductsView from 'components/templates/ProductsView/ProductsView'

import { BUSINESS_NAME } from 'constants/company'

import { products } from 'mocks/masculine-products.mock'

const Masculine = () => {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>
          {t('content.label.masculine')} | {BUSINESS_NAME}
        </title>
      </Head>
      <FadeIn>
        <Box data-cy='page-masculine' p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
          <ProductsView products={products} />
        </Box>
      </FadeIn>
    </>
  )
}

export default Masculine
