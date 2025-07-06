import { useState } from 'react'
import OverlayMenu from './components/OverlayMenu'
import WrapperFunctions from './components/WrapperFunctions'
import WrapperLogo from './components/WrapperLogo'
import WrapperMenuBar from './components/WrapperMenuBar'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full p-4 flex items-center relative">
      <WrapperMenuBar toggleMenu={toggleMenu} />

      <WrapperLogo />

      <WrapperFunctions />

      <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default Menu
