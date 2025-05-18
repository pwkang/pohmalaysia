import classNames, { Argument} from "classnames";
import { twMerge } from "tw-merge";

export const __DEV__ = process.env.ENVIRONMENT === 'development';

export const __PROD__ = process.env.ENVIRONMENT === 'production';

export const __PREVIEW__ = process.env.ENVIRONMENT === 'preview';

export const cn = (...classes: Argument[]) => {
  return twMerge(classNames(...classes));
};
