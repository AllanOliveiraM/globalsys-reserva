import Image from 'next/image'

import { Box } from '@granosafe/design-system'
import { Product } from 'models/products'

type ImageSliderProps = {
  product: Product
  currentShowingKey: number
  isAnimating: boolean
  lastKey: number
}

const ImageSlider = ({
  product,
  currentShowingKey,
  isAnimating,
  lastKey,
}: ImageSliderProps) => {
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
