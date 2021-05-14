import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'

export const homePageQuery = graphql`
  query homePageQuery {
    allSanityPage {
      edges {
        node {
          heroTitle
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const { 
      node: {
        heroTitle,
      }
  } = props.data.allSanityPage.edges[0];

  return (
    <Layout>
        <h1>{heroTitle}</h1>
    </Layout>
  )
}

export default IndexPage
