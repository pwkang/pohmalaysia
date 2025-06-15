import classNames, { Argument } from 'classnames';
import { getPayload } from 'payload';
import { twMerge } from 'tw-merge';
import config from '@/payload.config';

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
