import { CollectionConfig } from 'payload';

export const Role: CollectionConfig = {
  labels: {
    plural: 'Roles',
    singular: 'Role',
  },
  slug: 'roles',
  fields: [
    {
      name: 'Name',
      type: 'text',
    },
  ],
};
