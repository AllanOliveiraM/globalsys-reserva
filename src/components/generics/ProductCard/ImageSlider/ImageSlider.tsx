import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { Box } from '@granosafe/design-system'
import { Product } from 'models/products'

import { DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME } from 'constants/layout'

type ImageSliderProps = {
  product: Product
}

const ImageSlider = ({ product }: ImageSliderProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [currentShowingKey, setCurrentShowingKey] = useState<number>(1)

  const lastKey = useMemo(() => product.imageSrc.slice()?.pop()?.key || 0, [product])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        return
      }

      setCurrentShowingKey(prevState => {
        if (prevState < lastKey) {
          return prevState + 1
        }

        return 1
      })
    }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME)

    return () => {
      clearInterval(interval)
    }
  }, [isAnimating, lastKey, product.imageSrc])

  return (
    <>
      {product.imageSrc.map(image => (
        <Image
          style={{
            transition: 'all 0.3s ease',
            opacity: currentShowingKey === image.key ? 1 : 0,
          }}
          key={image.key}
          src={image.src}
          alt={product.name}
          layout='fill'
          priority
          objectFit='cover'
          draggable={false}
          onMouseEnter={() => setIsAnimating(true)}
          onMouseLeave={() => {
            setIsAnimating(false)

            setTimeout(() => {
              setCurrentShowingKey(1)
            }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME / 2)
          }}
          onTouchStart={() => setIsAnimating(true)}
          onTouchEnd={() => {
            setIsAnimating(false)

            setTimeout(() => {
              setCurrentShowingKey(1)
            }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME / 2)
          }}
          onTouchMoveCapture={() => setIsAnimating(true)}
          onTouchCancelCapture={() => {
            setIsAnimating(false)

            setTimeout(() => {
              setCurrentShowingKey(1)
            }, DEFAULT_PRODUCT_IMAGE_TRANSITION_TIME / 2)
          }}
        />
      ))}
      <Box
        position='absolute'
        bottom='0'
        left='0'
        right='0'
        h='0.6rem'
        bg='grey200t'
        data-product-slide
        {...(isAnimating && { 'data-product-slide-active': true })}
      >
        {product.imageSrc.map(image => (
          <Box
            key={image.key}
            position='absolute'
            bottom='0'
            transition='right 0.6s ease, left 0.8s ease'
            left={`calc((100% / ${lastKey}) * ${currentShowingKey - 1})`}
            right={`calc((100% / ${lastKey}) * (${lastKey} - ${currentShowingKey}))`}
            h='0.6rem'
            bg='primary'
            borderRadius='4px'
          />
        ))}
      </Box>
    </>
  )
}

export default ImageSlider
