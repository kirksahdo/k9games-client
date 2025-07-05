import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should apply medium size classes by default', () => {
    render(<Button text="Medium" size="medium" />)
    const buttonElement = screen.getByRole('button', { name: /Medium/i })

    expect(buttonElement).toHaveClass('w-[7.625rem] h-[2.5rem] text-sm')
  })

  it('should apply small size classes when size="small"', () => {
    render(<Button text="Small" size="small" />)
    const buttonElement = screen.getByRole('button', { name: /small/i })

    expect(buttonElement).toHaveClass('w-[5.9375rem] h-[1.875rem] text-xs')
  })

  it('should apply large size classes when size="large"', () => {
    render(<Button text="Large" size="large" />)
    const buttonElement = screen.getByRole('button', { name: /large/i })

    expect(buttonElement).toHaveClass('w-[9.375rem] h-[3.125rem] text-base')
  })

  it('should have the base layout, style, and gradient classes', () => {
    render(<Button text="Button" size="medium" />)
    const buttonElement = screen.getByRole('button', { name: /button/i })

    expect(buttonElement).toHaveClass(
      'flex items-center justify-center gap-1.5'
    )

    expect(buttonElement).toHaveClass('text-white rounded-sm cursor-pointer')

    expect(buttonElement).toHaveClass('bg-(image:--gradient-primary)')
    expect(buttonElement).toHaveClass(
      'hover:bg-(image:--gradient-primary-hover)'
    )
  })

  it('should render an icon and apply the correct size class', () => {
    const MockIcon = ({ className }: { className?: string }) => (
      <svg data-testid="mock-icon" className={className} />
    )
    render(<Button text="Button" size="large" Icon={MockIcon} />)

    const iconElement = screen.getByTestId('mock-icon')
    expect(iconElement).toBeInTheDocument()

    expect(iconElement).toHaveClass('h-5 w-5')

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument()
  })

  it('should not render an icon if props is not passed', () => {
    render(<Button text="Button" size="large" />)

    const iconElement = screen.queryByTestId('mock-icon')
    expect(iconElement).not.toBeInTheDocument()
  })

  it('should render a full width button', () => {
    render(<Button text="Button" size="large" fullWidth />)

    const element = screen.getByRole('button', { name: /button/i })

    expect(element).toHaveClass('w-full')
  })
})
