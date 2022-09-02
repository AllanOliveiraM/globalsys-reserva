import { ReactNode } from 'react'

import { createContext } from '@nexpy/react-easy-context-api'

type ShoppingBagContextValue = null

type ShoppingBagProviderProps = {
  children: ReactNode
}

export const ShoppingBagContext = createContext<ShoppingBagContextValue>(null)

export const ShoppingBagProvider = ({ children }: ShoppingBagProviderProps) => {
  return (
    <ShoppingBagContext.Provider value={null}>{children}</ShoppingBagContext.Provider>
  )
}
