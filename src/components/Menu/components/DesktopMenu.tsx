import React from 'react'
import WrapperFunctions from './WrapperFunctions'
import { MenuProps } from '..'
import MenuLink, { MenuLinkProps } from './MenuLink'
import Logo from '../../../components/Logo'
import Button from '../../../components/Button'
import { FaRegUserCircle as UserIcon } from 'react-icons/fa'
import { IoIosArrowDown as ArrowIcon } from 'react-icons/io'
import Link from 'next/link'

export type DesktopMenuProps = Pick<MenuProps, 'username'>

const MenuItems = ({
  menuItems
}: {
  menuItems: Pick<MenuLinkProps, 'href' | 'label'>[]
}) => (
  <ul className="flex gap-8 items-center">
    {menuItems.map((item) => (
      <MenuLink key={item.href} {...item} mode="desktop" />
    ))}
  </ul>
)

const UserProfile = ({ username }: DesktopMenuProps) => (
  <button type="button" className="flex gap-1.5 items-center cursor-pointer">
    <UserIcon className="text-white size-6" />

    <span className="text-[16px] text-white font-medium">{username}</span>

    <ArrowIcon className="text-gray size-6 mt-1" />
  </button>
)

const DesktopMenu = ({ username }: DesktopMenuProps) => {
  const menuItems = [
    {
      href: '#',
      label: 'Home'
    },
    {
      href: '#',
      label: 'Explore'
    }
  ]

  return (
    <nav className="w-full px-24 py-14 flex items-center justify-between">
      <div className="flex gap-11">
        <Link href="/">
          <Logo size="normal" color="white" />
        </Link>
        <MenuItems menuItems={menuItems} />
      </div>
      <div className="flex gap-5">
        <WrapperFunctions />
        {username ? (
          <UserProfile username={username} />
        ) : (
          <Button size="medium" text="Sign In" />
        )}
      </div>
    </nav>
  )
}

export default DesktopMenu
