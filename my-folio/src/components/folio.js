import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import {H2} from "../pages/index"
//import config from "../../config"

const Projet = styled.section`
  //height:50vh;
  display:flex;
  justify-content:center;
  color: white;
  padding: 5% 0 8%;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  background-color:#2e3141;
  @media (max-width: 1023px) {
    padding: 5% 0 25%;
    clip-path: polygon(0 0, 100% 3%, 100% 100%, 0 100%);
  }
`
const Section = styled.section`
  width:70%;

`
const AllProject= styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  margin-top:3em;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`

const Card = styled.div`
  background-color:#353849;
  width:45%;
  border-radius:2%;
  margin-bottom:5%;
  padding-bottom:3%;
  @media (max-width: 1023px) {
    width:90%;
    padding-bottom:10%;
  }
`
const H3 = styled.h3`
  text-transform: uppercase;
  border-bottom: 2px solid hsla(0,0%,100%,.125);
  margin: 5%;
  padding-bottom: .5em;
   
`
const Description= styled.p`
  margin: 1em 2em 2em;
  line-height: 150%;
  color: hsla(0,0%,100%,.9);
  
`
const Button = styled.a`
border: 2px solid hsla(0,0%,100%,.125);
 text-decoration:none;
 width: 3.5em;
 margin-left:5%;
 padding:.5em;
 font-size:1.3em;
 color:white;
 border-radius:5%;
 font-weight: 700;
 text-transform:uppercase;
 transition: 0.5s;
 &:hover {
    background-color:#2e3141;
  }
`

const Folio = ({ data }) => (
    <Projet>
      <Section>
        <H2>{data.folioTitle}</H2>
        <AllProject>
          {/* {config.folioProjects.map(projet => {
            console.log({projet});
            return(
              <Card>
                <a href={projet.url}>
                  <StaticImage
                    src={projet.img}
                    width={700}
                    layout= "constrained"
                    //quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt={projet.name}
                    style={{ borderRadius: `5% 5% 0 0` }}
                  />
                </a>
                <H3>{projet.name}</H3>
                <Description>{projet.description} </Description> 
              </Card>
            );
          })} */}
          <Card>
            <a href="http://api-github.surge.sh/">
              <StaticImage
                src="../images/folio2.png"
                width={600}
                layout= "constrained"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="projet1"
                style={{ borderRadius: `2% 2% 0 0` }}
              />
            </a>
            <H3>API GitHub</H3>
            <Description>Little project to learn how to use a real API and work with his data. </Description> 
            <Button href="https://github.com/kevdanone/API-GitHub"> repos </Button>
          
          </Card>
          <Card>
            <a href="https://kevdanone.github.io/pixelart/">
              <StaticImage
                src="../images/folio1.png"
                width={600}
                layout= "constrained"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="projet1"
                style={{ borderRadius: `2% 2% 0 0` }}
              />
            </a>
            <H3>Pixel Art</H3>
            <Description>a little game to improve my DOM manipulation skill. </Description> 
            <Button href="https://github.com/kevdanone/pixelart"> repos </Button>
          
          </Card>
          
          <Card>
            <a href="https://kevdanone.github.io/Acey-Deucey/">
              <StaticImage
                src="../images/folio3.png"
                width={600}
                layout= "constrained"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="projet1"
                style={{ borderRadius: `2% 2% 0 0` }}
              />
            </a>
            <H3>Acey Deucey</H3>
            <Description>a little card game in Js to training my skill. </Description> 
            <Button href="https://github.com/kevdanone/Acey-Deucey"> repos </Button>
          
          </Card>
          
        </AllProject>
      </Section>
    </Projet>
  )
  
  Folio.propTypes = {
    data: PropTypes.object,
  }
  
  export default Folio