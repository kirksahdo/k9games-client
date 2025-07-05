import { Meta, StoryObj } from '@storybook/react'
import MidiaMatch from '.'

export default {
  title: 'MidiaMatch',
  component: MidiaMatch
} as Meta

export const Desktop: StoryObj = {
  render: () => (
    <MidiaMatch greaterThan="md">
      <h1>Only on Desktop</h1>
    </MidiaMatch>
  )
}

export const Mobile: StoryObj = {
  render: () => (
    <MidiaMatch lessThan="md">
      <h1>Only on Mobile</h1>
    </MidiaMatch>
  )
}
