import styled from "styled-components"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { dark, primary } from "./palette"

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1150px;
  /* height: 500px; */
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`
export const ServicesH1 = styled.h1`
  font-size: 32px;
  margin-bottom: 1rem;
  color: ${dark};
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TitleIcon = styled(AiOutlineFundProjectionScreen)`
  color: ${primary};
  margin-right: 4px;
`
export const ServicesColumns = styled.div`
  display: grid;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col2 col1";
  grid-gap: 2rem;
  margin: 1rem 0;
  max-width: 1150px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-areas: "col1" "col2";
    grid-gap: 2rem;
  }
`
export const Column = styled.div`
  /* max-width: 400px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`
export const ColumnImage = styled.img`
  width: 100%;
  height: 100%;
  /* width: 250px; */
  margin: 0 auto;
`
export const ColumnH2 = styled.h2`
  text-align: center;
  margin: 0.5rem 0;
  color: ${dark};
`
export const ColumnP = styled.p`
  text-align: center;
  margin: 0 auto;
  max-width: 300px;
  line-height: 1.5rem;
  color: ${dark};
`
