import React from 'react';
import Layout from '../../../components/layout/layout';
import BodListing from '../../../components/templates/bod/BodListing';

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params: { slug } }: PageProps) {
  return (
    <Layout>
      <BodListing slug={slug} />
    </Layout>
  );
}

export default Page;
