import { CollectionConfig } from 'payload';

export const Committee: CollectionConfig = {
  labels: {
    plural: 'Committees',
    singular: 'Committee',
  },
  slug: 'committee',
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
          name: 'Start',
          type: 'number',
        },
        {
          name: 'End',
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
          type: 'relationship',
          relationTo: 'roles',
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
