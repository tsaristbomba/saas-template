import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Button from "./Button"
import {
  PricingContainer,
  PricingWrapper,
  PricingIcon,
  PricingContent,
  Box,
  BoxPrice,
} from "./styles/Pricing.styles"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query {
      pricingJson {
        title
        prices {
          title
          price
          description
          buttonLabel
          bestOffer
        }
      }
    }
  `).pricingJson

  return (
    <PricingContainer id="pricing" data-aos="fade-up">
      <PricingWrapper>
        <h1>
          <PricingIcon />
          {data.title}
        </h1>
        <PricingContent>
          {data.prices.map((item, key) => (
            <Box key={key} bestOffer={item.bestOffer}>
              <h2 bestOffer={item.bestOffer}>{item.title}</h2>
              <BoxPrice bestOffer={item.bestOffer}>
                <small bestOffer={item.bestOffer}>$</small>
                {item.price}
                <small bestOffer={item.bestOffer}>/mo</small>
              </BoxPrice>
              <p bestOffer={item.bestOffer}>{item.description}</p>
              <Button href="#contact" light={item.bestOffer}>
                {item.buttonLabel}
              </Button>
            </Box>
          ))}
        </PricingContent>
      </PricingWrapper>
    </PricingContainer>
  )
}

export default Pricing
