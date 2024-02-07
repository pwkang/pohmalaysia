export interface Newspaper {
  slug: string;
  title: string;
  date: Date;
  imageWidth?: number;
  imageHeight?: number;
}

export const newspaper: Newspaper[] = [
  {
    slug: '2022-05-09-election',
    title: '雪隆傅氏公会选举，傅桂洋出任新会长',
    date: new Date('2022-05-09'),
    imageHeight: 405,
    imageWidth: 1062,
  },
  {
    slug: '2019-02-22-spring-festival',
    title: '春祭大典报导',
    date: new Date('2019-02-22'),
    imageHeight: 579,
    imageWidth: 1058,
  },
  {
    slug: '2017-08-14-swearing-in-dinner',
    title: '傅氏总会理事就职晚宴',
    date: new Date('2017-08-14'),
    imageHeight: 672,
    imageWidth: 678,
  },
  {
    slug: '2017-01-17-inaugural-committee',
    title: '第一届理事报导',
    date: new Date('2017-01-17'),
    imageHeight: 628,
    imageWidth: 1024,
  },
  {
    slug: '2016-12-17-special-meeting',
    title: '召开特别大会报道',
    date: new Date('2016-12-17'),
    imageHeight: 424,
    imageWidth: 1440,
  },
  {
    slug: '2016-05-31-renaming',
    title: '马来西亚傅氏公会会员大会把傅氏公会易名为傅氏总会',
    date: new Date('2016-05-31'),
    imageHeight: 765,
    imageWidth: 575,
  },
  {
    slug: '2016-02-25-chinese-new-year',
    title: '马来西亚傅氏总会丙申年正月初六举办新春团拜联欢晚会',
    date: new Date('2016-02-25'),
    imageHeight: 451,
    imageWidth: 1150,
  },
  {
    slug: '2016-02-17-chinese-new-year',
    title: '马来西亚傅氏公会理事出席马来西亚赖罗傅宗亲联谊会新春团拜',
    date: new Date('2016-02-17'),
    imageHeight: 1071,
    imageWidth: 544,
  },
];
