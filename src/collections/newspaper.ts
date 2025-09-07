import type { CollectionConfig } from 'payload';

export const Newspaper: CollectionConfig = {
  slug: 'newspapers',
  labels: {
    singular: 'Newspaper',
    plural: 'Newspapers',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'metaTitle',
      label: 'Meta Title',
      type: 'text',
    },
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'text',
    },
  ],
};
