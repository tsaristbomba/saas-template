import styled from "styled-components"
import { tertiary, dark, primary } from "./palette"
import { AiOutlineBulb } from "react-icons/ai"

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${tertiary};
`
export const AboutWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col2 col1";
  grid-gap: 1.5rem;
  margin: 1rem 0;
  height: 500px;
  max-width: 1150px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-areas: "col1" "col2";
    grid-gap: 2rem;
  }
`
export const AboutContent = styled.div`
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
export const AboutH1 = styled.h1`
  font-size: 32px;
  margin-bottom: 1rem;
  color: ${dark};
  line-height: 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const AboutIcon = styled(AiOutlineBulb)`
  color: ${primary};
`
export const AboutP = styled.p`
  margin-bottom: 1.8rem;
  color: ${dark};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const AboutList = styled.div``
export const ListTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${dark};
`
export const ListIcon = styled.div``
export const ListSub = styled.p`
  margin-bottom: 1rem;
  color: ${dark};
`
export const ImageWrapper = styled.div`
  grid-area: col2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 58px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 24px;
  }
`
export const AboutImage = styled.img`
  height: 100%;
  width: 100%;
`
