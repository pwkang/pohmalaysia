import type { Media } from '@/payload-types';

export interface Gallery {
  id: string;
  slug: string;
  title: string;
  date: string;
  images: (string | Media)[];
  metaTitle: string;
  metaDescription: string;
  thumbnail: (string | null) | Media;
  updatedAt: string;
  createdAt: string;
}
