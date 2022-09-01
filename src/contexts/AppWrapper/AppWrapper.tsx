import { ReactNode } from 'react'

import { ThemeProvider } from '@granosafe/design-system'

import { LocaleProvider } from 'contexts/LocaleContext'

type AppWrapperProps = {
  children: ReactNode
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <ThemeProvider>
    <LocaleProvider>{children}</LocaleProvider>
  </ThemeProvider>
)

export default AppWrapper
