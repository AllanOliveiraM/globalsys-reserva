import { ReactNode } from 'react'

import { ThemeProvider } from '@granosafe/design-system'

import { LocaleProvider } from 'contexts/LocaleContext'
import { MenuProvider } from 'contexts/MenuContext'
import { ShoppingBagProvider } from 'contexts/ShoppingBagContext'

import { customTheme } from 'theme/theme'

type AppWrapperProps = {
  children: ReactNode
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <ThemeProvider theme={customTheme}>
    <LocaleProvider>
      <ShoppingBagProvider>
        <MenuProvider>{children}</MenuProvider>
      </ShoppingBagProvider>
    </LocaleProvider>
  </ThemeProvider>
)

export default AppWrapper
