import styled from "styled-components"
import { dark, primary, secondary, tertiary } from "./palette"
import { AiOutlineCreditCard } from "react-icons/ai"

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${tertiary};
`
export const PricingWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 700px;
  padding: 34px;

  h1 {
    font-size: 32px;
    margin-bottom: 1rem;
    color: ${dark};
    line-height: 3rem;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`
export const PricingIcon = styled(AiOutlineCreditCard)`
  color: ${primary};
  margin-right: 4px;
`
export const PricingContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(31%, 1fr);
  grid-template-areas: "col1 col2 col3";
  grid-gap: 1.5rem;
  margin: 1rem 0;
  max-width: 1150px;

  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-areas: "col1" "col2";
    grid-gap: 2rem;
  }
`
export const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 24px;
  height: 380px;
  width: 230px;
  background: ${({ bestOffer }) => (bestOffer ? primary : secondary)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: ${({ bestOffer }) => (bestOffer ? secondary : dark)};
  }

  p {
    color: ${({ bestOffer }) => (bestOffer ? secondary : dark)};
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
export const BoxPrice = styled.h3`
  font-size: 2rem;
  color: ${({ bestOffer }) => (bestOffer ? secondary : primary)};

  small {
    color: ${({ bestOffer }) => (bestOffer ? secondary : dark)};
    font-size: 1rem;
    margin: 2px;
  }
`
