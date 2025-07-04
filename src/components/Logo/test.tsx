import { render, screen } from '@testing-library/react'
import { setMedia } from 'mock-match-media'

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

  it('should render a bigger logo without text if render on small screen', () => {
    setMedia({ width: '600px' })
    render(<Logo hideText />)
    expect(screen.getByLabelText(/K9Games/i).parentElement).toHaveClass(
      'max-md:w-[5.8rem]',
      'max-md:h-[4.5rem]'
    )
  })
})
