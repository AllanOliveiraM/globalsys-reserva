import { ReactNode } from 'react'

import { Button, ButtonProps } from '@granosafe/design-system'

type ActionButtonProps = {
  children: ReactNode
} & ButtonProps

const ActionButton = ({ children, ...props }: ActionButtonProps) => (
  <Button variant='ghost' p='0.5rem' borderRadius='50%' {...props}>
    {children}
  </Button>
)
export default ActionButton
