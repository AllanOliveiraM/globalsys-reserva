import { Button, ButtonProps } from '@nexpy/design-system'
import { styled, css } from '@xstyled/styled-components'

type CustomButtonProps = {
  isActive: boolean
} & ButtonProps

export const CustomButton = styled(Button)<CustomButtonProps>`
  & p {
    color: black;
    transition: all 0.2s ease;

    ${({ isActive }) =>
      isActive &&
      css`
        color: primary !important;
      `}
  }

  &:hover p {
    color: primary;
  }
`
