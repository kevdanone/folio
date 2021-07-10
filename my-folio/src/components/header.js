import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import bgimg from "../images/bg.jpg"

const Hero = styled.header`
  height: 95vh;
  background: url(${bgimg}) fixed center no-repeat;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  
`
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: #2e3141;
  opacity:.7;
`

const Title = styled.div`
  color : white;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index:2;
  height:100%;
  margin: 0 20%;
  justify-content:center;
  
`
const H1 = styled.h1`
  font-size: 3em;
  text-align: left;
  font-weight: 700;
  padding-bottom: .5em;
  text-transform:uppercase;
  border-bottom: 2px solid hsla(0,0%,100%,.125);
  letter-spacing:0.1em;
`
const Subtitle = styled.p`
  text-align:left;
  font-size:1.7em;
  font-weight:300;
  text-transform:uppercase;
  letter-spacing:0.1em;
  color:hsla(0,0%,100%,.6);
  margin-top: 0;
`

const Header = ({ data }) => (
  <Hero>
    
    <Title>
      <H1>
          {data.description}
      </H1>
      <Subtitle>
          {data.subDescription}
      </Subtitle>
    </Title>
    <Overlay />
  </Hero>
)

Header.propTypes = {
  data: PropTypes.object,
}

export default Header
