import React from 'react';
import Layout from '../../../components/layout/layout';
import HeroSlider from '../../../components/layout/HeroSlider';
import GalleryImages from '../../../components/templates/gallery/GalleryImages';
import {
  fetchGallery,
  fetchGalleryMetadata,
  fetchGallerySlugs,
} from '../../../api/gallery';

interface PageProps {
  params: {
    slug: string;
  };
}

async function Page({ params: { slug } }) {
  const gallery = await fetchGallery(slug);

  if (!gallery) {
    return <Layout>Event not found</Layout>;
  }

  return (
    <Layout>
      <HeroSlider />
      <GalleryImages
        title={gallery.title}
        date={gallery.date}
        images={gallery.images}
      />
    </Layout>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchGallerySlugs();
  return slugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const metadata = await fetchGalleryMetadata(params.slug);

  return {
    title: `${metadata?.metaTitle} | 马来西亚傅氏总会`,
  };
}

export default Page;
