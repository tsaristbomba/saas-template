import styled from "styled-components"
import { dark, primaryLight, secondary } from "./palette"

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${secondary};
  background: ${dark};
`
export const FooterWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(31%, 1fr);
  grid-template-areas: "col1 col2 col3";
  grid-gap: 1.5rem;
  margin: 1rem 0;
  height: 180px;
  max-width: 1150px;
  padding: 24px;

  @media screen and (max-width: 480px) {
    height: auto;
    grid-template-areas: "col1" "col2";
    grid-gap: 2rem;
  }
`
export const FooterContact = styled.div`
  p {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-bottom: 5px;
  }
`
export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${secondary};
    text-decoration: none;
  }
  a:hover {
    color: ${primaryLight};
  }
  h3 {
    margin-bottom: 5px;
  }
`
export const FooterSocials = styled.div`
  a {
    color: ${secondary};
    font-size: 1.5rem;
    margin-right: 10px;
  }
  h3 {
    margin-bottom: 5px;
  }
`
