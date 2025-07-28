import React from 'react';
import { Metadata } from 'next';
import { defaultMetadata } from '@/lib//default-metadata';
import Layout from '@/components/layout/layout';
import NewspaperListing from '@/components/templates/newspaper/NewspaperListing';

function Page() {
  return (
    <Layout>
      <NewspaperListing />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '活动简报 | 马来西亚傅氏总会',
};

export default Page;
