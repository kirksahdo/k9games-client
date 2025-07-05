import { render, screen } from '@testing-library/react'
import React from 'react'

import MidiaMatch from '.'
import { setMedia } from 'mock-match-media'

describe('<MidiaMatch />', () => {
  beforeEach(() => {
    render(
      <>
        <MidiaMatch greaterThan="md">
          <h1>Desktop</h1>
        </MidiaMatch>
        <MidiaMatch lessThan="md">
          <h1>Mobile</h1>
        </MidiaMatch>
      </>
    )
  })

  it('should not render if no media query is passed', () => {
    render(
      <MidiaMatch>
        <h1>Content</h1>
      </MidiaMatch>
    )
    expect(screen.queryByRole('heading', { name: /content/i })).toBeNull()
  })

  it('should render the desktop heading when screen width is bigger than md', () => {
    setMedia({ width: '800px' })
    expect(
      screen.getByRole('heading', { name: /desktop/i })
    ).toBeInTheDocument()
  })

  it('should not render the mobile heading when screen width is bigger than md', () => {
    setMedia({ width: '800px' })
    expect(
      screen.getByRole('heading', { name: /mobile/i }).parentElement
    ).toHaveClass('md:hidden')
  })

  it('should render the mobile heading when screen width is bigger than md', () => {
    setMedia({ width: '300px' })
    expect(screen.getByRole('heading', { name: /mobile/i })).toBeInTheDocument()
  })

  it('should not render the desktop heading when screen width is bigger than md', () => {
    setMedia({ width: '300px' })
    expect(
      screen.getByRole('heading', { name: /desktop/i }).parentElement
    ).toHaveClass('max-md:hidden')
  })
})
