import React from 'react'
import { RiMenu2Fill as MenuIcon } from 'react-icons/ri'

interface WrapperMenuBar {
  toggleMenu: () => void
}

const WrapperMenuBar = ({ toggleMenu }: WrapperMenuBar) => {
  return (
    <div className="flex-1">
      <MenuIcon
        className="size-6 text-white cursor-pointer"
        aria-label="Open Menu"
        onClick={toggleMenu}
      />
    </div>
  )
}

export default WrapperMenuBar
