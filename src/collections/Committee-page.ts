import { CollectionConfig } from 'payload';

export const CommitteePage: CollectionConfig = {
  labels: {
    plural: 'Committee Pages',
    singular: 'Committee Page',
  },
  slug: 'committee-page',
  fields: [
    {
      name: 'Name',
      type: 'text',
    },
    {
      name: 'Slug',
      type: 'text',
    },
    {
      name: 'Meta Title',
      type: 'text',
    },
    {
      name: 'Meta Description',
      type: 'text',
    },
    {
      name: 'Committees',
      type: 'relationship',
      relationTo: 'committee',
      hasMany: true,
    },
  ],
};
