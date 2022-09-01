import { ReactNode } from 'react'

import { ThemeProvider } from '@granosafe/design-system'

type AppWrapperProps = {
  children: ReactNode
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <ThemeProvider>{children}</ThemeProvider>
)

export default AppWrapper
