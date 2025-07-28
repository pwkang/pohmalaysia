import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import ContactInfo from '@/components/templates/contact/ContactInfo';
import { defaultMetadata } from '@/lib//default-metadata';

function Page() {
  return (
    <Layout>
      <ContactInfo />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '联络我们 | 马来西亚傅氏总会',
};

export default Page;
