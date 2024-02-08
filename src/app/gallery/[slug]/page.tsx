import React from 'react';
import { galleryEvents } from '../../../components/templates/gallery/gallery';
import Layout from '../../../components/layout/layout';
import HeroSlider from '../../../components/layout/HeroSlider';
import GalleryImages from '../../../components/templates/gallery/GalleryImages';

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params: { slug } }) {
  const event = galleryEvents.find((event) => event.slug === slug);

  if (!event) {
    return <Layout>Event not found</Layout>;
  }

  return (
    <Layout>
      <HeroSlider />
      <GalleryImages event={event} />
    </Layout>
  );
}

export async function generateStaticParams() {
  return galleryEvents.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const event = galleryEvents.find((event) => event.slug === params.slug);

  return {
    title: `${event?.title} | 马来西亚傅氏总会`,
  };
}

export default Page;
