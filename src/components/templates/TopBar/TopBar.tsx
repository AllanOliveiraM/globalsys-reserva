import { Box, Flex } from '@granosafe/design-system'

import BrandLogo from 'components/icons/BrandLogo'

import { TOP_BAR_HEIGHT } from 'constants/layout'

const TopBar = () => (
  <Flex variant='vAlign' h={TOP_BAR_HEIGHT} p='0 2.4rem'>
    <Box>
      <BrandLogo />
    </Box>
  </Flex>
)

export default TopBar
