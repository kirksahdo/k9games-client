import { render, screen } from '@testing-library/react'

import Banner, { BannerProps } from '.'

describe('<Banner />', () => {
  it('should render the banner in initial state', () => {
    render(
      <Banner
        img=""
        title="Defy Death"
        subtitle="Play the new CrashLands Season"
        button={{
          label: 'Buy Now',
          onClick: () => {}
        }}
      />
    )

    expect(screen.getByLabelText(/Banner image/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/banner title/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/banner subtitle/i)).toBeInTheDocument()

    expect(
      screen.getAllByRole('button', { name: /buy now/i })[0]
    ).toBeInTheDocument()
  })

  it('should render the banner with correct props', () => {
    const banner: BannerProps = {
      img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391730/header.jpg?t=1744298392',
      title: 'Defy Death',
      subtitle: 'Play the new CrashLands Season',
      button: {
        label: 'Buy Now',
        onClick: () => {}
      }
    }

    render(<Banner {...banner} />)

    expect(screen.getByLabelText(/Banner image/i)).toHaveStyle(`
      background-image: url(${banner.img});
    `)

    expect(screen.getByLabelText(/banner title/i)).toHaveTextContent(
      banner.title
    )
    expect(screen.getByLabelText(/banner subtitle/i)).toHaveTextContent(
      banner.subtitle
    )
    expect(
      screen.getAllByRole('button', { name: /buy now/i })[0]
    ).toHaveTextContent(banner.button.label)
  })
})
