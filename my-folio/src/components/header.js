import * as React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import bgimg from "../images/bg.jpg"

const Hero = styled.header`
  height: 95vh;
  background: url(${bgimg}) fixed center no-repeat;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  display:flex;
  justify-content:center;
  @media (max-width: 1023px) {
    margin-bottom:1em;
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  }
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
  width: 70%;
  justify-content:center;
  
`

const fadeinLeft = keyframes`
 from {
        opacity:0;
        transform: translatex(-50px);
    }
    to {
        opacity:1;
        transform: translatex(0);
    }
`
const fadeinBot = keyframes`
 from {
        opacity:0;
        transform: translatey(50px);
    }
    to {
        opacity:1;
        transform: translatey(0);
    }
`

const H1 = styled.h1`
  font-size: 3em;
  text-align: left;
  font-weight: 700;
  padding-bottom: .5em;
  text-transform:uppercase;
  border-bottom: 2px solid hsla(0,0%,100%,.125);
  letter-spacing:0.1em;
  animation: 1s both 0.5s ${fadeinLeft} ;
`

const Subtitle = styled.p`
  text-align:left;
  font-size:1.7em;
  font-weight:300;
  text-transform:uppercase;
  letter-spacing:0.1em;
  color:hsla(0,0%,100%,.6);
  margin-top: 0;
  animation: 1s both 0.5s ${fadeinBot} ;
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
