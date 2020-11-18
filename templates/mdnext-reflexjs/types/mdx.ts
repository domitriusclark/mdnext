export interface MdxPath {
  filepath: string;
  slug: string;
}

export interface MdxContent extends MdxPath {
  hash: string;
  content: string;
  url: string;
  readingTime: string;
  mdx: string;
  data: {
    title?: string;
    date?: string;
    excerpt?: string;
    author?: string;
    image?: string;
    caption?: string;
  };
}
