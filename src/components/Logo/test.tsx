import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/K9Games/i).parentElement).toHaveClass(
      'text-white'
    )
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)

    expect(screen.getByLabelText(/K9Games/i).parentElement).toHaveClass(
      'text-black'
    )
  })

  it('should render a big logo', () => {
    render(<Logo size="large" />)

    expect(screen.getByLabelText(/K9Games/i).parentElement).toHaveClass(
      'w-80',
      'h-24'
    )
  })

  it('should render a normal logo by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/K9Games/i).parentElement).toHaveClass(
      'w-44',
      'h-14'
    )
  })
})
