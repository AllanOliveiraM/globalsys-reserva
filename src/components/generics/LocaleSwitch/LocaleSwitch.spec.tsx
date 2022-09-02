import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

import { fireEvent, render, screen } from '@testing-library/react'

import LocaleSwitch from '.'

const mockClick = jest.fn()

const renderComponent = () => {
  act(() => {
    render(<LocaleSwitch />)
  })
}

describe('Rendering', () => {
  beforeEach(() => {
    renderComponent()
  })

  it('Default', () => {
    expect(screen.getByText('PT'))
  })

  it('Change language', () => {
    fireEvent.click(screen.getByText('PT'))

    expect(mockClick).toHaveBeenCalledTimes(1)

    expect(screen.getByText('EN')).toBeInTheDocument()
  })
})
