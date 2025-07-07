import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export type MenuLinkProps = {
  href: string
  label: string
  mode: 'desktop' | 'mobile'
}

const MenuLink = ({ href, label, mode }: MenuLinkProps) => {
  const textClass = {
    desktop: 'text-white text-[12px] font-medium',
    mobile: 'text-black text-[28px] font-bold'
  }

  return (
    <Link
      aria-label={`${label} Link`}
      className={clsx('relative group', textClass[mode])}
      href={href}
    >
      <span>{label}</span>
      <span
        className={clsx(
          'absolute bottom-0 left-1/2 w-0 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0',
          mode === 'mobile' && 'h-[0.3rem]',
          mode === 'desktop' && 'h-[0.1rem]'
        )}
      ></span>
    </Link>
  )
}

export default MenuLink
