import { CollectionConfig } from 'payload';

export const Member: CollectionConfig = {
  labels: {
    plural: 'Members',
    singular: 'Member',
  },
  slug: 'members',
  fields: [
    {
      name: 'Name',
      type: 'text',
    },
    {
      name: 'Avatar',
      type: 'upload',
      relationTo: 'media',
      displayPreview: true,
    },
  ],
};
