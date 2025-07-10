import { Meta, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  parameters: {
    layout: 'centered'
  }
} as Meta

export const Default: StoryObj<RibbonProps> = {
  render: (args) => <Ribbon {...args} />
}
