import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import ContactInfo from '../../components/templates/contact/ContactInfo';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

function Page() {
  return (
    <Layout>
      <HeroSlider />;
      <ContactInfo />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '联络我们 | 马来西亚傅氏总会',
};

export default Page;
