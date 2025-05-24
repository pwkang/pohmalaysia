import { CollectionConfig } from 'payload';

export const Committee: CollectionConfig = {
  labels: {
    plural: 'Committees',
    singular: 'Committee',
  },
  slug: 'committee',
  fields: [
    {
      name: 'Name',
      type: 'text',
    },
    {
      name: 'Year',
      type: 'array',
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
      name: 'Committees',
      type: 'array',
      fields: [
        {
          name: 'Title',
          type: 'relationship',
          relationTo: 'roles',
        },
        {
          name: 'Members',
          type: 'relationship',
          relationTo: 'members',
          hasMany: true,
        },
      ],
    },
  ],
};
