import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const homePageQuery = graphql`
  query homePageQuery {
    sanityPage {
      heroTitle
      heroImage {
        asset {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: JPG)
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const { 
        heroTitle,
        heroImage
  } = props.data.sanityPage;

  return (
    <Layout>
        <h1>{heroTitle}</h1>
        <GatsbyImage image={heroImage.asset.gatsbyImageData} alt={heroTitle} />
    </Layout>
  )
}

export default IndexPage
