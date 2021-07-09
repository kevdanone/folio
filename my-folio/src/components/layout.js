
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle, styled } from "styled-components"
import Header from "./header"
import {Normalize} from "styled-normalize"
//import "./layout.css"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;700&display=swap');
  body{
    font-family: 'Raleway', sans-serif;
    background-color:#4c5c96;
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
          aboutMe
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
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
