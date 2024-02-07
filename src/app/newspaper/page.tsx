import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import NewspaperListing from '../../components/templates/newspaper/NewspaperListing';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <NewspaperListing />
    </Layout>
  );
}

export default Page;
