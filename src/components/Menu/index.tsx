import MidiaMatch from '../MidiaMatch'
import DesktopMenu from './components/DesktopMenu'
import MobileMenu from './components/MobileMenu'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  return (
    <>
      <MidiaMatch lessThan="md">
        <MobileMenu username={username} />
      </MidiaMatch>
      <MidiaMatch greaterThan="md">
        <DesktopMenu username={username} />
      </MidiaMatch>
    </>
  )
}

export default Menu
