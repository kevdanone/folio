import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = styled.div`
    width: 45%;
    text-align: right;
    margin: 0 6%;
    color: white;
    @media (max-width: 1023px) {
    width:70%;
  }
`
const Section = styled.section`
  display:flex;
  justify-content:center;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom:1em;
  }
`
export const H2= styled.h2`
  font-size: 1.7em;
  text-transform: uppercase;
  border-bottom: 2px solid hsla(0,0%,100%,.125);
  padding-bottom: .5em;
  
`
const Text= styled.p`
  font-size: 1.2em;
  color: hsla(0,0%,100%,.9);
`
const Button = styled.a`
 border: 2px solid hsla(0,0%,100%,.125);
 text-decoration:none;
 margin-top:1.5em;
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

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Section>
    <About>
    <H2>{data.site.siteMetadata.aboutTitle}</H2>
    <Text>{data.site.siteMetadata.aboutMe}</Text>
    <Text>{data.site.siteMetadata.aboutMe2}</Text>
    <Text>{data.site.siteMetadata.aboutMe3}</Text>
    <Button href="https://drive.google.com/file/d/1gOBpfXKUiv4aFdFQjsEjSn0Bw4IccfKJ/view?usp=sharing" target="_blank" >Resume</Button>
    </About>
    <StaticImage
      src="../images/kevinFolio.png"
      width={300}
      layout= "constrained"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="kevin photo"
      style={{ marginBottom: `1.45rem` ,borderRadius: `50%` }}
    />
    </Section>
  </Layout>
)

export const query = graphql`
query PageQuery {
  site {
    siteMetadata {
      aboutTitle
      aboutMe
      aboutMe2
      aboutMe3
    }
  }
}
`

export default IndexPage
