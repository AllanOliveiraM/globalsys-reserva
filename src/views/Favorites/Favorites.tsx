import Head from 'next/head'

import { Box, Flex, Text } from '@nexpy/design-system'
import { useTranslate } from 'hooks'

import FadeIn from 'components/generics/FadeIn'
import CatAndGirl from 'components/icons/CatAndGirl'
import ProductsView from 'components/templates/ProductsView/ProductsView'

import { FavoritesContext } from 'contexts/FavoritesContext'

import { BUSINESS_NAME } from 'constants/company'

const Favorites = () => {
  const { t } = useTranslate()

  const favoritesContext = FavoritesContext.useContext()

  const hasFavorites = Boolean(favoritesContext?.favorites?.length)

  return (
    <FadeIn>
      <Head>
        <title>
          {t('content.label.favorites')} | {BUSINESS_NAME}
        </title>
      </Head>

      <Box data-cy='page-favorites' p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
        <ProductsView products={favoritesContext?.favorites || []} />
      </Box>

      {!hasFavorites && (
        <Flex flexDirection='column' variant='center' minHeight='42.5vh' mt='2.4rem'>
          <Flex variant='center' flexDirection='column' gap='2.4rem'>
            <CatAndGirl />
            <Text maxWidth={{ _: '20rem', lg: '40rem' }} textAlign='center'>
              {t('content.title.nothing_here_favorites')}
            </Text>
          </Flex>
        </Flex>
      )}
    </FadeIn>
  )
}

export default Favorites
