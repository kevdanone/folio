import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import bgimg from "../images/bg.jpg"
import {Overlay} from "./header"

const Foot = styled.footer`
    position:relative;
    height: 60vh;
    margin-top: -5em;
    background: url(${bgimg}) fixed center no-repeat;
    background-size: cover;
    clip-path: polygon(0 10%,100% 0%,100% 100%,0 100%);
`

const Footer = ({data}) => (

    <Foot>

     © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    <Overlay/>   
    </Foot>

)

Footer.propTypes = {
    data: PropTypes.object,
  }
  
  export default Footer