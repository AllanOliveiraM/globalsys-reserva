import { ReactNode } from 'react'

import { ThemeProvider } from '@granosafe/design-system'

import { LocaleProvider } from 'contexts/LocaleContext'

import { customTheme } from 'theme/theme'

type AppWrapperProps = {
  children: ReactNode
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <ThemeProvider theme={customTheme}>
    <LocaleProvider>{children}</LocaleProvider>
  </ThemeProvider>
)

export default AppWrapper
