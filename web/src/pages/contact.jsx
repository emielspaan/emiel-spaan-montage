import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import Layout from '../containers/Layout';

const Container = styled.div`
  padding: 24px;
`;

export const contactQuery = graphql`
  query contactQuery {
    sanityCompany {
      address
      email
      telephone
      name
    }
  }
`;

const Contact = (props) => {
  const {
    data: {
      sanityCompany: {
        address,
        email,
        telephone,
        name,
      },
    },
  } = props;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Emiel Spaan Montage</title>
        <meta name="description" content="Neem contact op met Emiel Spaan Montage voor een vrijblijvend gesprek" />
      </Helmet>
      <Container>
        <h1>Contact</h1>
        <p>{name}</p>
        <p>{address}</p>
        <p>{telephone}</p>
        <p>{email}</p>
      </Container>
    </Layout>
  );
};

export default Contact;
