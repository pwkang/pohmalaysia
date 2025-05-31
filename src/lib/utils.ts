import classNames, { Argument } from 'classnames';
import { twMerge } from 'tw-merge';

export const __DEV__ = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';

export const __PROD__ = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export const __PREVIEW__ = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

export const cn = (...classes: Argument[]) => {
  return twMerge(classNames(...classes));
};
