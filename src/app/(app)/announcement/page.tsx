import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import AnnouncementListing from '@/components/templates/announcement/AnnouncementListing';
import { defaultMetadata } from '@/lib//default-metadata';

function Page() {
  return (
    <Layout>
      <AnnouncementListing />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '云端布告板 | 马来西亚傅氏总会',
};

export default Page;
