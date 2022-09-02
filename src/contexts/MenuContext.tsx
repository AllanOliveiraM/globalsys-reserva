import { useState, Dispatch, SetStateAction, ReactNode } from 'react'

import { createContext } from '@nexpy/react-easy-context-api'

type MenuContextValue = {
  isOpened: boolean
  setIsOpened: Dispatch<SetStateAction<boolean>>
}

type MenuProviderProps = {
  children: ReactNode
}

export const MenuContext = createContext<MenuContextValue>({} as MenuContextValue)

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <MenuContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </MenuContext.Provider>
  )
}
