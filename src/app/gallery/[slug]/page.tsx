import React from 'react';
import { galleryEvents } from '../../../components/templates/gallery/events';
import Layout from '../../../components/layout/layout';
import HeroSlider from '../../../components/layout/HeroSlider';
import GalleryImages from '../../../components/templates/gallery/GalleryImages';

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

export default Page;
