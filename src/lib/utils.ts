import classNames, { Argument } from 'classnames';
import { getPayload } from 'payload';
import { twMerge } from 'tw-merge';
import config from '@/payload.config';

export const __DEV__ = process.env.ENVIRONMENT === 'development';

export const __PROD__ = process.env.ENVIRONMENT === 'production';

export const __PREVIEW__ = process.env.ENVIRONMENT === 'preview';

export const cn = (...classes: Argument[]) => {
  return twMerge(classNames(...classes));
};

export const getPayloadClient = async () => {
  const payload = await getPayload({ config });
  return payload;
};
