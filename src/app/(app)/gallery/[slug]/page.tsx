import React from 'react';
import Layout from '@/components/layout/layout';
import GalleryImages from '@/components/templates/gallery/GalleryImages';
import {
  fetchGallery,
  fetchGalleryMetadata,
  fetchGallerySlugs,
} from '@/api/gallery';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }) {
  const { slug } = await params;
  const gallery = await fetchGallery(slug);

  if (!gallery) {
    return <Layout>Event not found</Layout>;
  }

  return (
    <Layout>
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
  const { slug } = await params;
  const metadata = await fetchGalleryMetadata(slug);

  return {
    title: `${metadata?.metaTitle} | 马来西亚傅氏总会`,
  };
}

export default Page;
