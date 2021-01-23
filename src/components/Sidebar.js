import React from "react"

import {
  SidebarContainer,
  IconWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./styles/Sidebar.styles"

const Sidebar = ({ handleMenu, isOpen }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <IconWrapper onClick={handleMenu}>
        <CloseIcon />
      </IconWrapper>
      <SidebarMenu>
        <SidebarLink onClick={handleMenu} href="#about">
          About
        </SidebarLink>
        <SidebarLink onClick={handleMenu} href="#services">
          Services
        </SidebarLink>
        <SidebarLink onClick={handleMenu} href="#pricing">
          Pricing
        </SidebarLink>
        <SidebarLink onClick={handleMenu} href="#contact">
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
