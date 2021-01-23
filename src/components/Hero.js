import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ImageWrapper,
  HeroImage,
} from "./styles/Hero.styles"
import Button from "./Button"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroJson {
        subtitle
        title
        paragraph
        buttonLabel
        image {
          publicURL
        }
      }
    }
  `).heroJson

  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent data-aos="fade-right">
          <HeroH1>{data.title}</HeroH1>
          <HeroH2>{data.subtitle}</HeroH2>
          <HeroP>{data.paragraph}</HeroP>
          <HeroBtnWrapper>
            <Button href="#services">{data.buttonLabel}</Button>
          </HeroBtnWrapper>
        </HeroContent>
        <ImageWrapper data-aos="fade-left">
          <HeroImage src={data.image.publicURL} alt="hero image" />
        </ImageWrapper>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero
