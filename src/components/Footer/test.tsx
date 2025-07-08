import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer initial state', () => {
    render(<Footer />)

    expect(screen.getByLabelText(/Footer/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/K9Games/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/contact section/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contact email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contact number/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/social media section/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/links section/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /store/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /FAQ/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/location section/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/location adress/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/location zip code/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/location state and country/i)
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/website rights/i)).toBeInTheDocument()
  })
})
