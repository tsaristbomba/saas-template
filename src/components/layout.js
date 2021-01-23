import React from "react"
import PropTypes from "prop-types"
import Aos from "aos"
import "aos/dist/aos.css"

import Navbar from "./Navbar"
import GlobalStyles from "./styles/GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  React.useEffect(() => {
    Aos.init()
  }, [])

  // Scroll to top every render
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito&family=Inter&display=swap');
      </style>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
