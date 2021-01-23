import styled from "styled-components"
import { dark } from "./palette"

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const HeroWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col1 col2";
  grid-gap: 1.5rem;
  margin: 1rem 0;
  height: 500px;
  max-width: 1150px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-areas: "col2" "col1";
    grid-gap: 2rem;
  }
`
export const HeroContent = styled.div`
  grid-area: col1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    padding: 0 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`
export const HeroH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 1rem;
  color: ${dark};
  line-height: 3rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const HeroH2 = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 1rem;
  color: ${dark};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const HeroP = styled.p`
  margin-bottom: 1.8rem;
  color: ${dark};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const HeroBtnWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const ImageWrapper = styled.div`
  grid-area: col2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    padding: 0 58px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 24px;
  }
`
export const HeroImage = styled.img`
  height: 100%;
  width: 100%;
`
