import styled from "styled-components"
import { dark, primary, primaryLight } from "./palette"
import { GoPrimitiveDot } from "react-icons/go"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

export const TContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const TWrapper = styled.div`
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
    grid-template-areas: "col1" "col2";
    grid-gap: 2rem;
  }
`
export const TLeft = styled.div`
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
export const TH1 = styled.h1`
  font-size: 32px;
  margin-bottom: 1rem;
  color: ${dark};
  line-height: 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const TP = styled.p``
export const TRight = styled.div`
  grid-area: col2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  color: ${primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`
export const IconLeft = styled(AiOutlineLeft)`
  margin-right: 1rem;
  cursor: pointer;
`
export const IconRight = styled(AiOutlineRight)`
  cursor: pointer;
`

export const ProfileDots = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
`
export const IconDot = styled(GoPrimitiveDot)`
  color: ${({ active }) => (active ? primary : primaryLight)};
  cursor: pointer;
  margin: 0 6px;
  font-size: 1.5rem;
`
