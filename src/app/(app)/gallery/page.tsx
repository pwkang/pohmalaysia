import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import GalleryListing from '@/components/templates/gallery/GalleryListing';
import { defaultMetadata } from '@/lib//default-metadata';

function Page() {
  return (
    <Layout>
      <GalleryListing />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '活动相册 | 马来西亚傅氏总会',
};

export default Page;
