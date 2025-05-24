import React from 'react';
import Layout from '@/components/layout/layout';
import HeroSlider from '@/components/layout/HeroSlider';
import History from '@/components/templates/history/History';
import { Metadata } from 'next';
import { defaultMetadata } from '@/lib//default-metadata';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <History />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '总会简史 | 马来西亚傅氏总会',
  description: '马来西亚傅氏总会的历史，从1975年成立至今的发展历程。',
};

export default Page;
