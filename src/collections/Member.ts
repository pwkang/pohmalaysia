import { CollectionConfig } from 'payload';

export const Member: CollectionConfig = {
  labels: {
    plural: 'Members',
    singular: 'Member',
  },
  slug: 'members',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'avatar',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media',
      displayPreview: true,
    },
  ],
};
