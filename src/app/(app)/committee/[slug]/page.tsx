import type { Metadata } from 'next';
import { fetchBodSlugs, getBodPageMetadata } from '@/api/bod';
import Layout from '@/components/layout/layout';
import BodListing from '@/components/templates/bod/BodListing';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { slug } = await params;
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metaDescription, metaTitle } = await getBodPageMetadata(slug);

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default Page;
