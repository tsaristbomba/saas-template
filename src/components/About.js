import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  AiFillThunderbolt,
  AiFillSafetyCertificate,
  AiFillPayCircle,
} from "react-icons/ai"

import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutH1,
  AboutIcon,
  AboutP,
  AboutList,
  ListTitle,
  ListSub,
  ImageWrapper,
  AboutImage,
} from "./styles/About.styles"
import { primary } from "./styles/palette"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        subtitle
        title
        characteristics {
          subtitle
          title
          icon
        }
        image {
          publicURL
        }
      }
    }
  `).aboutJson

  function getIcon(iconName) {
    switch (iconName) {
      case "AiFillThunderbolt":
        return (
          <AiFillThunderbolt style={{ color: primary, marginRight: "5px" }} />
        )
      case "AiFillSafetyCertificate":
        return (
          <AiFillSafetyCertificate
            style={{ color: primary, marginRight: "5px" }}
          />
        )
      case "AiFillPayCircle":
        return (
          <AiFillPayCircle style={{ color: primary, marginRight: "5px" }} />
        )
      default:
        return ""
    }
  }

  return (
    <AboutContainer id="about" data-aos="fade-up">
      <AboutWrapper>
        <AboutContent>
          <AboutH1>
            <AboutIcon />
            {data.title}
          </AboutH1>
          <AboutP>{data.subtitle}</AboutP>
          <AboutList>
            {data.characteristics.map((item, key) => (
              <div key={key}>
                <ListTitle>
                  {getIcon(item.icon)}
                  {item.title}
                </ListTitle>
                <ListSub>{item.subtitle}</ListSub>
              </div>
            ))}
          </AboutList>
        </AboutContent>
        <ImageWrapper>
          <AboutImage src={data.image.publicURL} alt="hero image" />
        </ImageWrapper>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About
