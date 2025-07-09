import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const DefyDeathBanner: StoryObj<BannerProps> = {
  render: () => (
    <Banner
      img="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391730/header.jpg?t=1744298392"
      title="Defy Death"
      subtitle="Play the new CrashLands Season"
      button={{
        label: 'Buy Now',
        onClick: () => {}
      }}
    />
  )
}

export const Default: StoryObj<BannerProps> = {
  render: (args) => <Banner {...args} />
}
