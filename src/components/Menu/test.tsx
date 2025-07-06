import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/K9Games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open cart/i)).toBeInTheDocument()
  })

  it('should open when the menu icon is clicked and close when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    const menuOverlay = screen.getByLabelText('Menu')

    expect(menuOverlay).toHaveClass('opacity-0')
    expect(menuOverlay).toHaveAttribute('aria-hidden', 'true')

    await user.click(screen.getByLabelText('Open Menu'))

    expect(menuOverlay).toHaveClass('opacity-100')
    expect(menuOverlay).toHaveAttribute('aria-hidden', 'false')

    const closeButton = screen.getByRole('button', { name: 'Close Menu' })
    expect(closeButton).toBeVisible()

    await user.click(closeButton)

    expect(menuOverlay).toHaveClass('opacity-0')
    expect(menuOverlay).toHaveAttribute('aria-hidden', 'true')
  })
})
