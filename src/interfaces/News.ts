import { NewsCategory } from '../enums';

interface INews {
  id: number;
  category: NewsCategory;
  title: string;
  main_image: string;
  sub_title: string;
  news_data: string;
  author: string;
  body: string;
  headline: boolean;
  highlights: boolean;
}

export type { INews }