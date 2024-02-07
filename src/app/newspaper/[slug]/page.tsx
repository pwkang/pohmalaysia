import React from 'react';
import Layout from '../../../components/layout/layout';
import HeroSlider from '../../../components/layout/HeroSlider';
import { newspaper } from '../../../components/templates/newspaper/newspaper';
import NewspaperPage from '../../../components/templates/newspaper/NewspaperPage';

function Page({ params: { slug } }) {
  const news = newspaper.find((event) => event.slug === slug);

  if (!news) {
    return <Layout>Event not found</Layout>;
  }

  return (
    <Layout>
      <HeroSlider />
      <NewspaperPage newspaper={news} />
    </Layout>
  );
}

export async function generateStaticParams() {
  return newspaper.map((event) => ({
    slug: event.slug,
  }));
}

export default Page;
