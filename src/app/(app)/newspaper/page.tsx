import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import NewspaperListing from '@/components/templates/newspaper/NewspaperListing';
import { defaultMetadata } from '@/lib//default-metadata';

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
