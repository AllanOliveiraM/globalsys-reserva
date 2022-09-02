import { Box, Flex, Text } from '@granosafe/design-system'
import { useTranslate } from 'hooks'

import FadeIn from 'components/generics/FadeIn'
import CatAndGirl from 'components/icons/CatAndGirl'
import ProductsView from 'components/templates/ProductsView/ProductsView'

import { FavoritesContext } from 'contexts/FavoritesContext'

const Favorites = () => {
  const { t } = useTranslate()

  const favoritesContext = FavoritesContext.useContext()

  const hasFavorites = Boolean(favoritesContext?.favorites?.length)

  return (
    <FadeIn>
      <Box p={{ _: '0 2.4rem', xl: '0 6.4rem' }}>
        <ProductsView products={favoritesContext?.favorites || []} />
      </Box>

      {!hasFavorites && (
        <Flex flexDirection='column' variant='center' minHeight='42.5vh'>
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
