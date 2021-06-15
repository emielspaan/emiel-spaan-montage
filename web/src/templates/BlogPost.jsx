import React from 'react';
import styled from '@emotion/styled';
import { SRLWrapper } from 'simple-react-lightbox';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../containers/Layout';
import Grid from '../components/Grid';

const Container = styled.div`
  padding: 24px;
  position: relative;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  cursor: pointer;
`;

const ProjectPostTemplate = ({ pageContext: { title, images } }) => (
  <Layout>
    <Container>
      <h1>
        {title}
      </h1>
      <SRLWrapper>
        <Grid
          container
          alignItems="center"
          spacing={3}
        >
          {images.map((image) => {
            const { asset: { gatsbyImageData } } = image;
            return (
              <Grid item lg={4} xs={12} md={4} sm={4}>
                <StyledGatsbyImage
                  image={gatsbyImageData}
                  alt={title}
                />
              </Grid>
            );
          })}
        </Grid>
      </SRLWrapper>
    </Container>
  </Layout>
);
export default ProjectPostTemplate;
