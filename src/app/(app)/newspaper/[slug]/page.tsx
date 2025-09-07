import type { Metadata } from 'next';
import { findNewspaperBySlug } from '@/api/newspaper';
import Layout from '@/components/layout/layout';
import NewspaperPage from '@/components/templates/newspaper/NewspaperPage';
import { newspaper } from '@/components/templates/newspaper/newspaper';
import { defaultMetadata } from '@/lib//default-metadata';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: Props) {
  const { slug } = await params;
  const news = await findNewspaperBySlug(slug);

  if (!news) {
    return <Layout>Event not found</Layout>;
  }

  return (
    <Layout>
      <NewspaperPage newspaper={news} />
    </Layout>
  );
}

export async function generateStaticParams() {
  return newspaper.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = newspaper.find((event) => event.slug === slug);

  return {
    ...defaultMetadata,
    title: `${news?.title} | 马来西亚傅氏总会`,
  };
}

export default Page;
