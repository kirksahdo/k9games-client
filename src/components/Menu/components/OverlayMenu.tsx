import React from 'react'
import clsx from 'clsx'
import { IoMdClose as CloseIcon } from 'react-icons/io'

interface OverlayMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const OverlayMenu = ({ isOpen, toggleMenu }: OverlayMenuProps) => {
  return (
    <div
      aria-label="Menu"
      aria-hidden={!isOpen}
      className={clsx(
        'w-screen h-screen bg-white fixed top-0 left-0 z-(--overlay) py-8 px-6 transition-all transition-discrete',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <button
        type="button"
        className="size-8 flex justify-center items-center cursor-pointer absolute top-8 right-6"
        onClick={toggleMenu}
        aria-label="Close Menu"
      >
        <CloseIcon className="size-6" />
      </button>
    </div>
  )
}

export default OverlayMenu
