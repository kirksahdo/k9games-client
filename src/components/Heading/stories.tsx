import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  }
} as Meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Heading',
    color: 'white',
    line: undefined,
    lineColor: 'primary'
  }
}
