import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'

type SectionProps = {
  title: string
  ariaLabel: string
  links: {
    label: string
    href: string
    ariaLabel?: string
  }[]
}

const Section = ({ title, ariaLabel, links }: SectionProps) => (
  <div
    className="flex flex-col gap-4 max-md:w-1/2 md:w-1/4"
    aria-label={ariaLabel}
  >
    <Heading line="bottom" lineColor="secondary">
      {' '}
      {title}{' '}
    </Heading>
    <ul className="flex flex-col gap-1.5 pr-2">
      {links.map(({ label, href, ariaLabel }, index) => (
        <Link
          href={href}
          key={index}
          aria-label={ariaLabel}
          className="text-sm text-gray overflow-hidden text-ellipsis"
        >
          {label}
        </Link>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const sections: SectionProps[] = [
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

  return (
    <footer
      aria-label="Footer"
      className="flex w-full bg-white flex-col gap-6 p-6 flex-wrap relative"
    >
      <Logo color="black" />
      <div className="flex w-full flex-wrap gap-y-6">
        {sections.map(({ title, ariaLabel, links }, index) => (
          <Section
            key={index}
            title={title}
            ariaLabel={ariaLabel}
            links={links}
          />
        ))}
      </div>
      <h3
        className="w-full text-center font-[12px] text-gray mt-9 select-none"
        aria-label="Website Rights"
      >
        K9 Games 2025 © All rights reserved
      </h3>
    </footer>
  )
}

export default Footer
