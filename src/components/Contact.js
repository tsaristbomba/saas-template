import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  ContactContainer,
  ContactWrapper,
  ContactContent,
  ContactIcon,
  ContactH1,
  ContactP,
  ContactForm,
  ImageWrapper,
  ContactImage,
} from "./styles/Contact.styles"
import Button from "./Button"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contactJson {
        subtitle
        title
        image {
          publicURL
        }
      }
    }
  `).contactJson

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactContent data-aos="fade-right">
          <ContactH1>
            <ContactIcon />
            {data.title}
          </ContactH1>
          <ContactP>{data.subtitle}</ContactP>
          <ContactForm>
            <p>Name</p>
            <input required type="text" onChange="" />
            <p>Email</p>
            <input required type="email" onChange="" />
            <p>Message</p>
            <textarea required maxLength={250} onChange="" />
            <Button>Send</Button>
          </ContactForm>
        </ContactContent>
        <ImageWrapper data-aos="fade-left">
          <ContactImage src={data.image.publicURL} alt="hero image" />
        </ImageWrapper>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
