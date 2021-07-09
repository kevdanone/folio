import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = styled.div`

`
const Section = styled.section`
  display:flex;
`
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Section>
    <About>
    <h2>{data.site.siteMetadata.title}</h2>
    <p>{data.site.siteMetadata.aboutMe}</p>
    <p>{data.site.siteMetadata.aboutMe2}</p>
    <p>{data.site.siteMetadata.aboutMe3}</p>
    </About>
    <StaticImage
      src="../images/kevinFolio.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="kevin photo"
      style={{ marginBottom: `1.45rem` },{ borderRadius: `50%` }}
    />
    </Section>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export const query = graphql`
query PageQuery {
  site {
    siteMetadata {
      title
      aboutMe
      aboutMe2
      aboutMe3
    }
  }
}
`

export default IndexPage
