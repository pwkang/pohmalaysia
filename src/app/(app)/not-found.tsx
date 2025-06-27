import React from 'react';
import { defaultMetadata } from '@/lib//default-metadata';
import Layout from '@/components/layout/layout';
function PageNotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center">Page not found</div>
    </Layout>
  );
}

export const metadata = {
  ...defaultMetadata,
  title: 'Page Not Found',
};

export default PageNotFound;
