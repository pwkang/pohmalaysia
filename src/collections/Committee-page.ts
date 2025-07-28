import type { CollectionConfig } from 'payload';

export const CommitteePage: CollectionConfig = {
  labels: {
    plural: 'Committee Pages',
    singular: 'Committee Page',
  },
  slug: 'committee-page',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
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
    {
      name: 'sessions',
      label: 'Sessions',
      type: 'array',
      fields: [
        {
          name: 'committees',
          label: 'Committees',
          type: 'relationship',
          relationTo: 'committee',
        },
      ],
    },
  ],
};
