import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { dark, primaryLight } from "./styles/palette"

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 2rem;
  border-radius: 4px;
`
const ProfileImg = styled(Img)`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  margin-bottom: 0.5rem;
`
const ProfileH1 = styled.h1`
  text-align: center;
  color: ${dark};
`
const ProfileCompany = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  color: ${primaryLight};
`
const ProfileText = styled.p`
  text-align: center;
  font-style: italic;
  color: ${dark};
`

const TestimonialsBox = ({ name, company, image, text }) => {
  return (
    <ProfileBox data-aos="fade-left">
      <ProfileImg fluid={image.childImageSharp.fluid} alt="hero image" />
      <ProfileH1>{name}</ProfileH1>
      <ProfileCompany>{company}</ProfileCompany>
      <ProfileText>{text}</ProfileText>
    </ProfileBox>
  )
}

export default TestimonialsBox
