import { ReactNode } from 'react'

import { Box } from '@granosafe/design-system'

import TopBar from 'components/templates/TopBar'

type PageWrapperProps = {
  children: ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => (
  <>
    <TopBar />
    <Box as='main'>{children}</Box>
  </>
)

export default PageWrapper
