import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  TContainer,
  TWrapper,
  TLeft,
  TH1,
  TP,
  TRight,
  ProfileContainer,
  Icons,
  IconLeft,
  IconRight,
  ProfileDots,
  IconDot,
} from "./styles/Testimonials.styles"
import TestimonialsBox from "./Testimonials.box"

const Testimonials = () => {
  const [index, setIndex] = React.useState(0)

  const data = useStaticQuery(graphql`
    query {
      testimonialsJson {
        testimonials {
          company
          name
          text
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        subtitle
        title
      }
    }
  `).testimonialsJson

  function handleIcons() {
    if (index < 2) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <TContainer>
      <TWrapper>
        <TLeft data-aos="fade-up">
          <TH1>{data.title}</TH1>
          <TP>{data.subtitle}</TP>
        </TLeft>
        <TRight>
          <ProfileContainer>
            <Icons>
              <IconLeft onClick={handleIcons} />
              <IconRight onClick={handleIcons} />
            </Icons>
            <TestimonialsBox {...data.testimonials[index]} />
            <ProfileDots>
              {index === 0 ? (
                <IconDot onClick={() => setIndex(0)} active="true" />
              ) : (
                <IconDot onClick={() => setIndex(0)} />
              )}
              {index === 1 ? (
                <IconDot onClick={() => setIndex(1)} active="true" />
              ) : (
                <IconDot onClick={() => setIndex(1)} />
              )}
              {index === 2 ? (
                <IconDot onClick={() => setIndex(2)} active="true" />
              ) : (
                <IconDot onClick={() => setIndex(2)} />
              )}
            </ProfileDots>
          </ProfileContainer>
        </TRight>
      </TWrapper>
    </TContainer>
  )
}

export default Testimonials
