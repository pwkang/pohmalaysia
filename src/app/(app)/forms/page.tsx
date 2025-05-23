import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import FormsDownload from '../../components/templates/forms/FormsDownload';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <FormsDownload />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '表格下载 | 马来西亚傅氏总会',
};

export default Page;
