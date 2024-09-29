export interface Gallery {
  slug: string;
  title: string;
  date: string;
  images: {
    url: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  thumbnail: {
    url: string;
  };
}
