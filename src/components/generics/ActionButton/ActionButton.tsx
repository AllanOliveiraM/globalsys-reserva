import { forwardRef, ReactNode } from 'react'

import { Button, ButtonProps } from '@nexpy/design-system'

type ActionButtonProps = {
  children: ReactNode
} & ButtonProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActionButton = ({ children, ...props }: ActionButtonProps, ref: any) => (
  <Button
    data-testid='action-button'
    variant='ghost'
    p='0.5rem'
    borderRadius='50%'
    {...props}
    ref={ref}
  >
    {children}
  </Button>
)

export default forwardRef(ActionButton)
