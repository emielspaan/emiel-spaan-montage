import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const AboutPage = (props) => {
  const {data: {page}} = props;

  return (
    <Layout>
        <h1>{page.title}</h1>
    </Layout>
  )
}

export default AboutPage
