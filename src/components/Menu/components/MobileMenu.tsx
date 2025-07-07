import React, { useState } from 'react'
import WrapperMenuBar from './WrapperMenuBar'
import WrapperLogo from './WrapperLogo'
import OverlayMenu from './OverlayMenu'
import WrapperFunctions from './WrapperFunctions'
import { MenuProps } from '..'

export type MobileMenuProps = Pick<MenuProps, 'username'>

const MobileMenu = ({ username }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const signedInMenuItems = [
    {
      href: '#',
      label: 'Home'
    },
    {
      href: '#',
      label: 'Explore'
    },
    {
      href: '#',
      label: 'My Account'
    },
    {
      href: '#',
      label: 'Wishlist'
    }
  ]

  const signedOutMenuItems = [
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
    <nav
      className="w-full p-4 flex items-center relative"
      aria-label="Mobile Menu"
    >
      <WrapperMenuBar toggleMenu={toggleMenu} />
      <WrapperLogo />
      <WrapperFunctions />
      <OverlayMenu
        isOpen={isOpen}
        isUserSignedIn={!!username}
        toggleMenu={toggleMenu}
        menuItems={username ? signedInMenuItems : signedOutMenuItems}
      />
    </nav>
  )
}

export default MobileMenu
