import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AiFillShop, AiFillPhone, AiFillMail } from "react-icons/ai"
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa"

import {
  FooterContainer,
  FooterWrapper,
  FooterContact,
  FooterMenu,
  FooterSocials,
} from "./styles/Footer.styles"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allFooterJson {
        edges {
          node {
            items
            title
          }
        }
      }
    }
  `).allFooterJson.edges

  console.log(data)

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContact>
          <h3>{data[0].node.title}</h3>
          <p>
            <AiFillShop />
            {data[0].node.items[0]}
          </p>
          <p>
            <AiFillPhone />
            {data[0].node.items[1]}
          </p>
          <p>
            <AiFillMail />
            {data[0].node.items[2]}
          </p>
        </FooterContact>
        <FooterMenu>
          <h3>{data[1].node.title}</h3>
          <a href="#about">{data[1].node.items[0]}</a>
          <a href="#services">{data[1].node.items[1]}</a>
          <a href="#pricing">{data[1].node.items[2]}</a>
        </FooterMenu>
        <FooterSocials>
          <h3>{data[2].node.title}</h3>
          <a href={data[2].node.items[0]} target="__blank">
            <FaFacebook />
          </a>
          <a href={data[2].node.items[1]} target="__blank">
            <FaTwitterSquare />
          </a>
          <a href={data[2].node.items[2]} target="__blank">
            <FaInstagramSquare />
          </a>
        </FooterSocials>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
