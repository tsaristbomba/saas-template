import React from "react"
import styled from "styled-components"
import { primary, primaryLight, secondary } from "./styles/palette"

const ButtonLink = styled.a`
  color: ${({ light }) => (light ? primary : secondary)};
  background: ${({ light }) => (light ? secondary : primary)};
  text-decoration: none;
  border: 1px solid ${primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  letter-spacing: 1.1px;
  padding: ${({ small }) => (small ? "5px 10px" : "10px 24px")};
  transition: all 0.2s ease;

  &:hover {
    background: ${primaryLight};
    color: ${secondary};
  }
`

const Button = ({ href, light, small, children }) => {
  return (
    <>
      <ButtonLink href={href} light={light} small={small}>
        {children}
      </ButtonLink>
    </>
  )
}

export default Button
