import React from "react"
import { FaBars } from "react-icons/fa"
import { AiFillMoneyCollect } from "react-icons/ai"
import Button from "./Button"
import Sidebar from "./Sidebar"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./styles/Navbar.styles"
import { primaryLight } from "./styles/palette"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  return (
    <Nav id="top">
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <NavbarContainer>
        <NavLogo href="#top">
          <AiFillMoneyCollect style={{ color: primaryLight }} />
          normandy
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <Button light small href="#contact">
              Contact
            </Button>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
