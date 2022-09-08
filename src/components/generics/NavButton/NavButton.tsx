import Link from 'next/link'
import { useRouter } from 'next/router'

import { Text, A, ButtonProps } from '@nexpy/design-system'

import { slugify } from 'utils/formatters'

import { CustomButton } from './styles'

type NavButtonProps = {
  text: string
  href: string
} & ButtonProps

const NavButton = ({ text, href, ...props }: NavButtonProps) => {
  const router = useRouter()

  const { pathname } = router

  return (
    <Link href={href} passHref>
      <A>
        <CustomButton
          isActive={href === pathname}
          variant='ghost'
          p='1.2rem 0.8rem'
          aria-label={text}
          data-cy={slugify(text)}
          {...props}
        >
          <Text
            fontSize={{
              _: '1.8rem !important',
              sm: '1.2rem !important',
              lg: '1.4rem !important',
            }}
            textTransform='uppercase'
            fontWeight='bold'
          >
            {text}
          </Text>
        </CustomButton>
      </A>
    </Link>
  )
}

export default NavButton
