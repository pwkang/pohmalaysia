import type { CollectionConfig } from 'payload';

export const Committee: CollectionConfig = {
  labels: {
    plural: 'Committees',
    singular: 'Committee',
  },
  slug: 'committee',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'year',
      label: 'Year',
      type: 'group',
      fields: [
        {
          name: 'start',
          label: 'Start Year',
          type: 'number',
        },
        {
          name: 'end',
          label: 'End Year',
          type: 'number',
        },
      ],
    },
    {
      name: 'committees',
      label: 'Committees',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'members',
          label: 'Members',
          type: 'relationship',
          relationTo: 'members',
          hasMany: true,
        },
      ],
    },
  ],
};
