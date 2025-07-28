import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import About from '@/components/templates/poh-about/About';
import { defaultMetadata } from '@/lib//default-metadata';

function Page() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '傅氏缘起 | 马来西亚傅氏总会',
};

export default Page;
