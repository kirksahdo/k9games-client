import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export type MenuLinkProps = {
  href: string
  label: string
}

const MenuLink = ({ href, label }: MenuLinkProps) => {
  return (
    <Link
      aria-label={`${label} Link`}
      className={clsx('text-[28px] font-bold relative group')}
      href={href}
    >
      <span>{label}</span>
      <span
        className="
          absolute
          bottom-0
          left-1/2
          w-0
          h-[0.3rem]
          bg-primary
          transition-all duration-200
          group-hover:w-full
          group-hover:left-0
        "
      ></span>
    </Link>
  )
}

export default MenuLink
