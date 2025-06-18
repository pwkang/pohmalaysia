import React from 'react';
import { Metadata } from 'next';
import { defaultMetadata } from '@/lib//default-metadata';
import HeroSlider from '@/components/layout/HeroSlider';
import PastChairmanListing from '@/components/templates/past-chairman/PastChairmanListing';
import Layout from '@/components/layout/layout';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <PastChairmanListing />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '历届会长 | 马来西亚傅氏总会',
  description: '马来西亚傅氏总会历届会长名单与介绍，自1975年成立以来，历届会长带领公会不断发展壮大。',
};

export default Page;
