import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import { SectionProps, sections } from './mock'

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
      {links.map(({ label, href, ariaLabel }) => (
        <Link
          href={href}
          key={label}
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
  return (
    <footer
      aria-label="Footer"
      className="flex w-full bg-white flex-col gap-6 p-6 flex-wrap relative"
    >
      <Logo color="black" />
      <div className="flex w-full flex-wrap gap-y-6">
        {sections.map(({ title, ariaLabel, links }) => (
          <Section
            key={title}
            title={title}
            ariaLabel={ariaLabel}
            links={links}
          />
        ))}
      </div>
      <p
        className="w-full text-center font-[12px] text-gray mt-9 select-none"
        aria-label="Website Rights"
      >
        K9 Games 2025 © All rights reserved
      </p>
    </footer>
  )
}

export default Footer
