import { Metadata } from 'next';
import config from '@lib/config';

export const defaultMetadata: Metadata = {
  title: '马来西亚傅氏总会',
  description: '马来西亚傅氏总会 Poh Association of Malaysia',
  keywords: [
    '马来西亚傅氏总会',
    '马来西亚傅氏公会',
    'Poh Association of Malaysia',
    'Poh Association',
  ],
  metadataBase: new URL(config.websiteUrl),
  openGraph: {
    title: '马来西亚傅氏总会',
    description: '马来西亚傅氏总会 Poh Association of Malaysia',
    url: config.websiteUrl,
    images: `${config.websiteUrl}/img/heroSlider/hs1.jpg`,
  },
};
