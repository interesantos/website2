export interface Article {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  category?: string;
  tags?: string[];
}