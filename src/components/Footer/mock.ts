export type SectionProps = {
  title: string
  ariaLabel: string
  links: {
    label: string
    href: string
    ariaLabel?: string
  }[]
}

export const sections: SectionProps[] = [
  {
    title: 'CONTACT',
    ariaLabel: 'Contact Section',
    links: [
      {
        label: 'suporte@wongames.gg',
        href: 'mailto:suporte@wongames.gg',
        ariaLabel: 'Contact Email'
      },
      {
        label: '+55 21 33283719',
        href: 'tel:+55 21 33283719',
        ariaLabel: 'Contact Number'
      }
    ]
  },
  {
    title: 'SOCIAL MEDIA',
    ariaLabel: 'Social Media Section',
    links: [
      {
        label: 'Instagram',
        href: 'https://instagram.com'
      },
      {
        label: 'Twitter',
        href: 'https://x.com'
      },
      {
        label: 'YouTube',
        href: 'https://youtube.com'
      },
      {
        label: 'Facebook',
        href: 'https://facebook.com'
      }
    ]
  },
  {
    title: 'LINKS',
    ariaLabel: 'Links Section',
    links: [
      {
        label: 'Store',
        href: '/'
      },
      {
        label: 'Explore',
        href: '/'
      },
      {
        label: 'Search',
        href: '/'
      },
      {
        label: 'FAQ',
        href: '/'
      }
    ]
  },
  {
    title: 'LOCATION',
    ariaLabel: 'Location Section',
    links: [
      { label: 'Rua 7 de Maio', href: '#', ariaLabel: 'Location Adress' },
      {
        label: '527  - 89020330',
        href: '#',
        ariaLabel: 'Location Zip Code'
      },
      {
        label: 'Rio de Janeiro, Brasil',
        href: '#',
        ariaLabel: 'Location State and Country'
      }
    ]
  }
]
