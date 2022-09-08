import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { BiWorld } from 'react-icons/bi'

import { A, Box, Card, Flex, useOnClickOutside, Text } from '@nexpy/design-system'
import { useTranslate } from 'hooks'

import FadeIn from 'components/generics/FadeIn'

import ActionButton from '../ActionButton'

const LocaleSwitch = () => {
  const router = useRouter()

  const { currentLocale } = useTranslate()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const localeSwitchRef = useRef(null)

  useOnClickOutside(localeSwitchRef, () => {
    setIsOpen(false)
  })

  return (
    <Box position='relative' ref={localeSwitchRef}>
      <ActionButton
        data-testid='language-button'
        data-cy='language-button'
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <Flex variant='vAlign' gap='0.4rem'>
          <Text textTransform='uppercase' variant='caption'>
            {currentLocale || ''}
          </Text>
          <BiWorld size='2rem' />
        </Flex>
      </ActionButton>

      <FadeIn show={isOpen}>
        <Flex
          as={Card}
          position='absolute'
          right='0'
          flexDirection='column'
          gap='1.2rem'
          p='1.2rem !important'
        >
          <Link href={router.pathname} locale='pt' passHref>
            <A
              onClick={() => setIsOpen(false)}
              color={currentLocale === 'pt' ? 'primary' : 'black'}
            >
              Português
            </A>
          </Link>
          <Link href={router.pathname} locale='en' passHref>
            <A
              onClick={() => setIsOpen(false)}
              color={currentLocale === 'en' ? 'primary' : 'black'}
            >
              English
            </A>
          </Link>
        </Flex>
      </FadeIn>
    </Box>
  )
}

export default LocaleSwitch
