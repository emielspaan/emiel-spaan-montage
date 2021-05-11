import React from 'react';
import Card from '../Card';
import Grid from '../Grid';
import data from '../stories.data/testData';

export default {
  title: 'Cards/Card',
};

export const Cards = () => (
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
);
