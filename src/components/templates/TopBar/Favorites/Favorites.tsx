import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'

import { motion, useAnimationControls } from 'framer-motion'
import { useClientSide } from 'hooks'
import { MarketplaceRoutes } from 'routes/marketplace'

import ActionButton from 'components/generics/ActionButton'

import { FavoritesContext } from 'contexts/FavoritesContext'

import { customTheme } from 'theme/theme'

const Favorites = () => {
  const router = useRouter()

  const favoritesContextContext = FavoritesContext.useContext()

  const existsFavorites = Boolean(favoritesContextContext?.favorites?.length)

  const controls = useAnimationControls()

  const isClietSide = useClientSide()

  useEffect(() => {
    controls.start({
      y: [-6, 0],
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoritesContextContext?.favorites?.length])

  if (!isClietSide) {
    return null
  }

  return (
    <ActionButton
      onClick={() => {
        router.push(MarketplaceRoutes.FAVORITES)
      }}
    >
      {existsFavorites ? (
        <motion.div animate={controls} transition={{ type: 'spring', duration: 0.4 }}>
          <HiHeart size='2rem' color={customTheme.colors.primary} />
        </motion.div>
      ) : (
        <HiOutlineHeart size='2rem' color='black' />
      )}
    </ActionButton>
  )
}

export default Favorites
