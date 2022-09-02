import { act } from 'react-dom/test-utils'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import ActionButton from '.'

const mockClick = jest.fn()

const renderComponent = (children?: string) => {
  act(() => {
    render(
      <ActionButton
        onClick={() => {
          mockClick()
        }}
      >
        {children}
      </ActionButton>
    )
  })
}

describe('Rendering and working test', () => {
  beforeEach(() => {
    renderComponent('Button text')
  })

  it('Rendering', () => {
    expect(screen.getByTestId('action-button')).toBeInTheDocument()
  })

  it('Rendering with custom text', () => {
    expect(screen.getByText('Button text')).toBeInTheDocument()
  })

  it('Click', () => {
    userEvent.click(screen.getByTestId('action-button'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})
