import styled from "styled-components"

import { AiOutlineAudit } from "react-icons/ai"
import { dark, primary, primaryLight } from "./palette"

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ContactWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col1 col2";
  grid-gap: 1.5rem;
  margin: 1rem 0;
  height: 600px;
  max-width: 1150px;
  padding: 24px;
  color: ${dark};

  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-areas: "col2" "col1";
    grid-gap: 2rem;
  }
`
export const ContactContent = styled.div`
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
export const ContactH1 = styled.h1`
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
export const ContactIcon = styled(AiOutlineAudit)`
  color: ${primary};
`
export const ContactP = styled.p`
  margin-bottom: 1.8rem;
  color: ${dark};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  p {
    font-weight: bold;
    width: 100%;
  }
  input {
    margin-bottom: 1rem;
    width: 100%;
    border: 1px solid ${primaryLight};
    border-radius: 4px;
    padding: 4px;
  }
  textarea {
    border: 1px solid ${primaryLight};
    width: 100%;
    border-radius: 4px;
    resize: none;
    overflow: auto;
    margin-bottom: 10px;
    height: 150px;
  }
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
export const ContactImage = styled.img`
  height: 100%;
  width: 100%;
`
