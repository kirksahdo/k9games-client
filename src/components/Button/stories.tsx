import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { MdAddShoppingCart } from 'react-icons/md'

export default {
  title: 'Button',
  component: Button
} as Meta

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
    text: 'Button',
    Icon: MdAddShoppingCart
  },
  render: (args) => <Button {...args} />
}
