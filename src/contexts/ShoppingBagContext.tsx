import { ReactNode, useCallback, useMemo } from 'react'

import { createContext } from '@nexpy/react-easy-context-api'
import { usePersistedState } from 'hooks'
import { Product } from 'models/products'

type ShoppingBagContextValue = {
  bag: Product[] | null
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
}

type ShoppingBagProviderProps = {
  children: ReactNode
}

export const ShoppingBagContext = createContext<ShoppingBagContextValue | null>(
  {} as ShoppingBagContextValue
)

export const ShoppingBagProvider = ({ children }: ShoppingBagProviderProps) => {
  const [currentProductsInBag, setCurrentProductsInBag] = usePersistedState<Record<
    number,
    Product
  > | null>(null, '_userCurrentBag')

  const addProduct = useCallback(
    (product: Product) => {
      setCurrentProductsInBag({
        ...currentProductsInBag,
        [product.id]: product,
      })
    },
    [currentProductsInBag, setCurrentProductsInBag]
  )

  const removeProduct = useCallback(
    (product: Product) => {
      // deep copy of currentProductsInBag?.bag to prevent referential set errors
      const newBag = (
        currentProductsInBag ? JSON.parse(JSON.stringify(currentProductsInBag)) : null
      ) as typeof currentProductsInBag

      delete newBag?.[product.id]

      setCurrentProductsInBag({ ...newBag })
    },
    [currentProductsInBag, setCurrentProductsInBag]
  )

  const bag = useMemo(() => {
    if (!currentProductsInBag) {
      return null
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.entries(currentProductsInBag).map(([_, product]) => product)
  }, [currentProductsInBag])

  return (
    <ShoppingBagContext.Provider
      value={{
        bag,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  )
}
