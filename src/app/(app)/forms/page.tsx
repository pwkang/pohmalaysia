import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import FormsDownload from '@/components/templates/forms/FormsDownload';
import { defaultMetadata } from '@/lib//default-metadata';

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
