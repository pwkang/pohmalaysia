import classNames, { type Argument } from 'classnames';
import { getPayload } from 'payload';
import { twMerge } from 'tw-merge';
import config from '@/payload.config';
import type { Media } from '@/payload-types';

export const __DEV__ = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';

export const __PROD__ = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export const __PREVIEW__ = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

export const cn = (...classes: Argument[]) => {
  return twMerge(classNames(...classes));
};

export const getPayloadClient = async () => {
  const payload = await getPayload({ config });
  return payload;
};

// Helper function to get image URL from Media object or string
export const getImageUrl = (image: string | Media): string => {
  if (typeof image === 'string') return image;
  return image?.url || '';
};
