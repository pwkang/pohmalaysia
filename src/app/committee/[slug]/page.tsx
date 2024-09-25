import React from 'react';
import Layout from '../../../components/layout/layout';
import BodListing from '../../../components/templates/bod/BodListing';
import { fetchBodSlugs, getBodPageMetadata } from '../../../api/bod';
import { Metadata } from 'next';

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

export async function generateStaticParams() {
  const slugs = await fetchBodSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const { metaDescription, metaTitle } = await getBodPageMetadata(slug);

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default Page;
