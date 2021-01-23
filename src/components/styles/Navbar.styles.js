import styled from "styled-components"
import { secondaryFont } from "./fonts"
import { dark, primary, secondary } from "./palette"

export const Nav = styled.nav`
  background: ${secondary};
  color: ${primary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  top: 0;
  /* z-index: 999; */
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding-left: 24px;
  max-width: 1150px;

  @media screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 24px;
  }
`
export const NavLogo = styled.a`
  font-size: 35px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-bottom: none;
  color: ${primary};
  text-transform: uppercase;
  font-family: ${secondaryFont};

  span {
    color: ${dark};
    font-weight: bold;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${dark};
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  /* height: 80px; */
  height: 100%;
  padding: 0 1.5rem;
`

export const NavLink = styled.a`
  color: ${dark};
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;
  transition: 0.2s ease;
  text-shadow: none;

  &:hover {
    color: ${primary};
  }
`
