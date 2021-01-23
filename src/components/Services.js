import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  TitleIcon,
  ServicesColumns,
  Column,
  ColumnImage,
  ColumnH2,
  ColumnP,
} from "./styles/Services.styles"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      servicesJson {
        title
        services {
          subtitle
          title
          image {
            publicURL
          }
        }
      }
    }
  `).servicesJson

  return (
    <ServicesContainer id="services" data-aos="fade-up">
      <ServicesWrapper>
        <ServicesH1>
          <TitleIcon />
          {data.title}
        </ServicesH1>
        <ServicesColumns>
          {data.services.map((item, key) => (
            <Column key={key}>
              <ColumnImage src={item.image.publicURL} alt={data.title} />
              <ColumnH2>{item.title}</ColumnH2>
              <ColumnP>{item.subtitle}</ColumnP>
            </Column>
          ))}
        </ServicesColumns>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
