import { ReactNode } from 'react'

import { Box } from '@nexpy/design-system'

import Menu from 'components/templates/Menu'
import TopBar from 'components/templates/TopBar'

import { TOP_BAR_HEIGHT } from 'constants/layout'

type PageWrapperProps = {
  children: ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => (
  <>
    <TopBar />

    <Menu />

    <Box
      as='main'
      minHeight={`calc(100vh - ${TOP_BAR_HEIGHT})`}
      maxHeight={`calc(100vh - ${TOP_BAR_HEIGHT})`}
      overflowY='auto'
    >
      {children}
    </Box>
  </>
)

export default PageWrapper
