import { Metadata } from 'next';
import config from '@lib/config';

export const defaultMetadata: Metadata = {
  title: '马来西亚傅氏总会',
  description: '马来西亚傅氏总会 Poh Association of Malaysia',
  keywords: [
    '傅氏总会',
    '傅氏',
    '马来西亚',
    '傅氏总会马来西亚',
    'Poh Association of Malaysia',
    'Poh Association',
    '傅氏总会马来西亚',
    '傅氏总会',
    '傅氏',
    '马来西亚',
  ],
  metadataBase: new URL(config.websiteUrl),
  openGraph: {
    title: '马来西亚傅氏总会',
    description: '马来西亚傅氏总会 Poh Association of Malaysia',
    url: config.websiteUrl,
    images: `${config.websiteUrl}/img/heroSlider/hs1.jpg`,
  },
};
