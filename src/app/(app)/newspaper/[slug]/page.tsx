import type { Metadata } from 'next';
import Layout from '@/components/layout/layout';
import NewspaperPage from '@/components/templates/newspaper/NewspaperPage';
import { newspaper } from '@/components/templates/newspaper/newspaper';
import { defaultMetadata } from '@/lib//default-metadata';

interface Props {
  params: {
    slug: string;
  };
}

function Page({ params: { slug } }: Props) {
  const news = newspaper.find((event) => event.slug === slug);

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

export function generateMetadata({ params }: Props): Metadata {
  const news = newspaper.find((event) => event.slug === params.slug);

  return {
    ...defaultMetadata,
    title: `${news?.title} | 马来西亚傅氏总会`,
  };
}

export default Page;
