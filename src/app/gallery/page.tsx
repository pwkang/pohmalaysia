import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import GalleryListing from '../../components/templates/gallery/GalleryListing';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <GalleryListing />
    </Layout>
  );
}

export default Page;
