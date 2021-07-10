import * as React from "react"
import { Link } from "gatsby"
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
`
const Section = styled.section`
  display:flex;
  justify-content:center;
`
const H2= styled.h2`
  font-size: 1.7em;
  text-transform: uppercase;
  border-bottom: 2px solid hsla(0,0%,100%,.125);
  padding-bottom: .5em;
`
const Text= styled.p`
  font-size: 1.2em;
  color: hsla(0,0%,100%,.9);
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
    </About>
    <StaticImage
      src="../images/kevinFolio.png"
      width={300}
      layout= "constrained"
      //quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="kevin photo"
      style={{ marginBottom: `1.45rem` },{ borderRadius: `50%` }}
    />
    </Section>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
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
