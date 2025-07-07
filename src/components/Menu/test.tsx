import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import Menu from '.'
import { setMedia } from 'mock-match-media'

describe('<Menu />', () => {
  it('should render the menu in mobile', () => {
    setMedia({ width: '300px' })
    render(<Menu />)

    expect(screen.getByLabelText(/mobile menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText('K9Games')[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText(/search/i)[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText('Open Cart')[0]).toBeInTheDocument()
  })

  it('should open when the menu icon is clicked and close when the close button is clicked', async () => {
    setMedia({ width: '300px' })
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

  it('should show register box when logged out in mobile', () => {
    setMedia({ width: '300px' })
    render(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeVisible()
    expect(screen.getByText(/sign up/i)).toBeVisible()
  })

  it('should show wishlight and account when logged in mobile', () => {
    setMedia({ width: '300px' })
    render(<Menu username="will" />)

    expect(screen.getByText(/my account/i)).toBeVisible()
    expect(screen.getByText(/wishlist/i)).toBeVisible()
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
