import React from 'react';
import Layout from '@/components/layout/layout';
import { defaultMetadata } from '@/lib//default-metadata';
import { Metadata } from 'next';
import HeroSlider from '@/components/layout/HeroSlider';
import AnnouncementListing from '@/components/templates/announcement/AnnouncementListing';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <AnnouncementListing />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '云端布告板 | 马来西亚傅氏总会',
};

export default Page;
