import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import Pricing from "../components/Pricing"
import SEO from "../components/seo"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Testimonials />
    <Services />
    <Pricing />
    <Contact />
  </Layout>
)

export default IndexPage
