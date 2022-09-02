import { ReactNode, useCallback, useMemo } from 'react'

import { createContext } from '@nexpy/react-easy-context-api'
import { usePersistedState } from 'hooks'
import { Product } from 'models/products'

type FavoritesContextValue = {
  favorites: Product[] | null
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
}

type FavoritesContextProviderProps = {
  children: ReactNode
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(
  {} as FavoritesContextValue
)

export const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
  const [currentProductsInFavorites, setCurrentProductsInFavorites] =
    usePersistedState<Record<number, Product> | null>(null, '_userCurrentFavorites')

  const addProduct = useCallback(
    (product: Product) => {
      setCurrentProductsInFavorites({
        ...currentProductsInFavorites,
        [product.id]: product,
      })
    },
    [currentProductsInFavorites, setCurrentProductsInFavorites]
  )

  const removeProduct = useCallback(
    (product: Product) => {
      // deep copy of currentProductsInFavorites to prevent referential set errors
      const newFavorites = (
        currentProductsInFavorites
          ? JSON.parse(JSON.stringify(currentProductsInFavorites))
          : null
      ) as typeof currentProductsInFavorites

      delete newFavorites?.[product.id]

      setCurrentProductsInFavorites({ ...newFavorites })
    },
    [currentProductsInFavorites, setCurrentProductsInFavorites]
  )

  const favorites = useMemo(() => {
    if (!currentProductsInFavorites) {
      return null
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.entries(currentProductsInFavorites).map(([_, product]) => product)
  }, [currentProductsInFavorites])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
