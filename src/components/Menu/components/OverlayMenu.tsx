import React from 'react'
import clsx from 'clsx'
import { IoMdClose as CloseIcon } from 'react-icons/io'
import MenuLink, { MenuLinkProps } from './MenuLink'
import Button from '../../Button'
import Link from 'next/link'

interface OverlayMenuProps {
  isOpen: boolean
  toggleMenu: () => void
  menuItems: MenuLinkProps[]
}

const CloseButton = ({ toggleMenu }: Pick<OverlayMenuProps, 'toggleMenu'>) => {
  return (
    <button
      type="button"
      className="size-8 flex justify-center items-center cursor-pointer absolute top-8 right-6 z-50"
      onClick={toggleMenu}
      aria-label="Close Menu"
    >
      <CloseIcon className="size-6" />
    </button>
  )
}

const LoggedOutButtons = () => (
  <div
    className={
      'flex flex-col gap-3 w-2/3 items-center transition-transform duration-300 ease-in-out'
    }
  >
    <Button size="large" text="Entrar" fullWidth mode="primary" />

    <h4 className="text-[12px] text-black font-medium"> or </h4>

    <Link
      href="#"
      className="text-[16px] font-medium text-primary cursor-pointer relative"
    >
      Sign Up
      <span
        className="
          absolute
          -bottom-0.5
          left-0
          w-full
          h-[2px]
          bg-primary
        "
      ></span>
    </Link>
  </div>
)

const MenuItems = ({ menuItems }: Pick<OverlayMenuProps, 'menuItems'>) => (
  <ul className="flex flex-col gap-9 items-center">
    {menuItems.map((item) => (
      <MenuLink key={item.href} {...item} />
    ))}
  </ul>
)

const OverlayMenu = ({ isOpen, toggleMenu, menuItems }: OverlayMenuProps) => {
  return (
    <div
      aria-label="Menu"
      aria-hidden={!isOpen}
      className={clsx(
        'w-screen h-screen bg-white fixed top-0 left-0 z-(--overlay) py-8 px-6 transition-all transition-discrete flex',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <CloseButton toggleMenu={toggleMenu} />

      <div
        className={clsx(
          'flex flex-1 flex-col justify-center items-center gap-64 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-y-0' : 'translate-y-12'
        )}
      >
        <MenuItems menuItems={menuItems} />
        <LoggedOutButtons />
      </div>
    </div>
  )
}

export default OverlayMenu
