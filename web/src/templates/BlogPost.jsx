import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../containers/Layout';

const ProjectPostTemplate = ({ pageContext: { title } }) => (
  <Layout>
    <section>
      {title}
    </section>
  </Layout>
);
export default ProjectPostTemplate;
