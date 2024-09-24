import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import About from '../../components/templates/poh-about/About';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <About />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '傅氏缘起 | 马来西亚傅氏总会',
};

export default Page;
