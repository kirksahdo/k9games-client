import { render, screen } from '@testing-library/react'
import React from 'react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    const headingText = 'text'
    render(<Heading>{headingText}</Heading>)

    expect(screen.getByRole('heading', { name: headingText })).toHaveClass(
      'text-black'
    )
  })

  it('should render a white heading when color is passed', () => {
    const headingText = 'text'
    render(<Heading color="white">{headingText}</Heading>)

    expect(screen.getByRole('heading', { name: headingText })).toHaveClass(
      'text-white'
    )
  })

  it('should render a heading with a line to the left', () => {
    const headingText = 'text'
    render(<Heading line="left">{headingText}</Heading>)
    const wrapper = screen.getByRole('heading', { name: /text/i }).parentElement

    expect(wrapper).toHaveClass('border-l-[0.4375rem] border-solid pl-3')
    expect(wrapper).toHaveClass('border-primary')
  })

  it('should render a heading with a line at the bottom', () => {
    const headingText = 'text'
    render(<Heading line="bottom">{headingText}</Heading>)
    const wrapper = screen.getByRole('heading', { name: /text/i }).parentElement

    expect(wrapper?.querySelector('span')).toBeInTheDocument()
    expect(wrapper?.querySelector('span')).toHaveClass(
      'h-[5px] w-1/3 bg-primary'
    )
  })

  it('should render a heading with a different line color', () => {
    const headingText = 'text'
    const { rerender } = render(
      <Heading line="left" lineColor="secondary">
        {headingText}
      </Heading>
    )
    const wrapper = screen.getByRole('heading', { name: /text/i }).parentElement
    expect(wrapper).toHaveClass('border-secondary')

    rerender(
      <Heading line="bottom" lineColor="secondary">
        {headingText}
      </Heading>
    )
    expect(wrapper?.querySelector('span')).toHaveClass('bg-secondary')
  })

  it('should render a small heading', () => {
    const headingText = 'text'
    render(<Heading size="small">{headingText}</Heading>)

    expect(screen.getByRole('heading', { name: headingText })).toHaveClass(
      'text-[16px]'
    )
  })
})
