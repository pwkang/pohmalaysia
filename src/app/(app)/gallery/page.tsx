import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import GalleryListing from '../../components/templates/gallery/GalleryListing';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <GalleryListing />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '活动相册 | 马来西亚傅氏总会',
};

export default Page;
