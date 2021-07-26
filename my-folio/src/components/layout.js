
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle} from "styled-components"
import Header from "./header"
import Folio from "./folio"
import Footer from "./footer"
import {Normalize} from "styled-normalize"


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;700&display=swap');
  body{
    font-family: 'Raleway', sans-serif;
    background-color:#3f4e85;
  }
  
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          description
          subDescription
          folioTitle
          mail
          twitter
          linkedin
          github

        }
      }
    }
  `)

  return (
    <>
      <Normalize/>
      <GlobalStyle />
      <Header data={data.site.siteMetadata} />
      <main>{children}</main>
      <Folio data={data.site.siteMetadata}/>
      <Footer data={data.site.siteMetadata} />
        
     
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
