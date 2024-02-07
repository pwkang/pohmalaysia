export interface GalleryEvent {
  slug: string;
  title: string;
  date: Date;
  totalImages: number;
  thumbnailIndex?: number;
}

export const galleryEvents: GalleryEvent[] = [
  {
    slug: '2022-04-30-swearing-in-ceremony',
    title: '马来西亚华人姓氏总会联合会第六届理事宣誓就职典礼活动照片',
    date: new Date('2022-04-30'),
    totalImages: 6,
    thumbnailIndex: 3,
  },
  {
    slug: '2020-08-17-ancestor-worship',
    title: '2020年马来西亚傅氏总会祭祖活动',
    date: new Date('2020-08-17'),
    totalImages: 3,
    thumbnailIndex: 1,
  },
  {
    slug: '2017-08-16-annual-general-meeting',
    title: '2017 AGM',
    date: new Date('2017-08-16'),
    totalImages: 8,
    thumbnailIndex: 1,
  },
  {
    slug: '2017-05-17-ancestor-worship',
    title: '2017 祭祖',
    date: new Date('2017-05-17'),
    totalImages: 112,
    thumbnailIndex: 14,
  },
  {
    slug: '2017-02-17-chinese-new-year',
    title: '2017 新年',
    date: new Date('2017-02-17'),
    totalImages: 27,
    thumbnailIndex: 3,
  },
  {
    slug: '2016-08-16-mid-autumn-festival',
    title: '2016 中秋节',
    date: new Date('2016-08-16'),
    totalImages: 14,
    thumbnailIndex: 5,
  },
  {
    slug: '2016-05-17-agm',
    title: '2016 AGM',
    date: new Date('2016-05-17'),
    totalImages: 12,
    thumbnailIndex: 1,
  },
  {
    slug: '2016-02-17-chinese-new-year',
    title: '2016 新年',
    date: new Date('2016-02-17'),
    totalImages: 27,
    thumbnailIndex: 2,
  },
  {
    slug: '2015-02-17-chinese-new-year',
    title: '2015 新年',
    date: new Date('2015-02-17'),
    totalImages: 28,
    thumbnailIndex: 8,
  },
  {
    slug: '2012-09-23-poh-association-malaysia-mid-autumn-festival',
    title: '马来西亚傅氏公会主办妇女组暨青年团协办中秋节文娱联欢晚会',
    date: new Date('2012-09-23'),
    totalImages: 78,
    thumbnailIndex: 21,
  },
];
