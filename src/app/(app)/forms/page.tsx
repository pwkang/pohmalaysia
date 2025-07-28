import React from 'react';
import { Metadata } from 'next';
import FormsDownload from '@/components/templates/forms/FormsDownload';
import { defaultMetadata } from '@/lib//default-metadata';
import Layout from '@/components/layout/layout';

function Page() {
  return (
    <Layout>
      <FormsDownload />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '表格下载 | 马来西亚傅氏总会',
};

export default Page;
