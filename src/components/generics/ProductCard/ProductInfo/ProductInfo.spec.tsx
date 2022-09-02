import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

import { render, screen } from '@testing-library/react'

import ProductInfo from '.'

const renderComponent = (discount: number | null) => {
  act(() => {
    render(
      <ProductInfo
        product={{
          id: 1,
          name: 'Product',
          discountPercent: discount,
          price: 100,
          imageSrc: [
            {
              key: 1,
              src: 'https://source.unsplash.com/random/352x549/?wallpaper,landscape',
            },
          ],
        }}
      />
    )
  })
}

describe('Rendering', () => {
  it('With discount', () => {
    renderComponent(10)
    expect(screen.getByText('R$ 90,00')).toBeInTheDocument()
  })

  it('Without discount', () => {
    renderComponent(null)
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
  })
})
