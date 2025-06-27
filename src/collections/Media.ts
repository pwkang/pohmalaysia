import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      defaultValue: ({ req }) => {
        return req.file?.name.split('.').slice(0, -1).join('_');
      },
    },
  ],
  folders: {
    browseByFolder: true,
  },
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 10,
        formatOptions: {
          format: 'webp',
          options: {
            quality: 10,
          },
        },
        generateImageName: ({ originalName }) => {
          return `${originalName}_${Date.now()}_thumbnail.webp`;
        },
      },
      {
        name: 'webview',
        width: 1024,
        formatOptions: {
          format: 'webp',
        },
        generateImageName: ({ originalName }) => {
          return `${originalName}_${Date.now()}_webview.webp`;
        },
      },
    ],
    adminThumbnail: 'webview',
    mimeTypes: ['image/*'],
  },
};
