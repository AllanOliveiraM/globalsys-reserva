import Link from 'next/link'

import { Button, Text, A, ButtonProps } from '@granosafe/design-system'

import { slugify } from 'utils/formatters'

type NavButtonProps = {
  text: string
  href: string
} & ButtonProps

const NavButton = ({ text, href, ...props }: NavButtonProps) => (
  <Link href={href} passHref>
    <A>
      <Button
        variant='ghost'
        p='1.2rem 0.8rem'
        aria-label={text}
        data-cy={slugify(text)}
        {...props}
      >
        <Text fontSize='1.2rem !important' textTransform='uppercase' fontWeight='bold'>
          {text}
        </Text>
      </Button>
    </A>
  </Link>
)

export default NavButton
