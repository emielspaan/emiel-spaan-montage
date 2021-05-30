import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card';
import Grid from '../Grid';


const Cards = () => {
    const data = useStaticQuery(
        graphql`
        query ProjectsQuery {
        },
    `,
      );
  return (
  <Grid container spacing={3}>
    {data.map((item) => {
      const { title, description, imageUrl } = item;
      return (
        <Grid item lg={3} xs={12} md={4} sm={6}>
          <Card
            cardHeading={title}
            cardBody={description}
            image={imageUrl}
          />
        </Grid>
      );
    })}
  </Grid>
)};


const Page = () => (

)