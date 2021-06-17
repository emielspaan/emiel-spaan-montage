import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../containers/Layout';

const Container = styled.div`
  padding: 24px;
`;

export const contactPageQuery = graphql`
  query {
    allSanityProjects {
      edges {
        node {
          title
          slug {
            current
          }
          images {
            asset {
              gatsbyImageData(width: 500, height: 500, placeholder: BLURRED, formats: JPG)
            }
          }
        }
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Container>
      <h1>Contact</h1>
    </Container>
  </Layout>
);

export default Contact;
