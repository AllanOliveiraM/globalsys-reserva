import { Box } from '@nexpy/design-system'
import styled from '@xstyled/styled-components'

export const ContainerBackground = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: systemBlack;
`

export const Container = styled(Box)`
  .menu-content {
    padding: 2.4rem;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: 28.5rem;
    width: 80vw;
    height: 100vh;
    z-index: 10;
  }

  @media (min-width: sm) {
    display: none !important;
  }
`
