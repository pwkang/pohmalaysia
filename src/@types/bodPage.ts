import { Member } from './member';

interface Committee {
  title: string;
  members: Member[];
  newRow: boolean;
}

export interface BodPage {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  bods: Bod[];
}

export interface Bod {
  name: string;
  year: {
    start: number;
    end: number;
  };
  committees: Committee[];
}
