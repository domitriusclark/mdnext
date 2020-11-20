const config = {
  site: {
    name: 'MDNEXT',
    copyright: `© ${new Date().getFullYear()} MDXNEXT = MDX + Nextjs`,
  },
  links: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Twitter',
      url: '#',
    },
  ],
  blog: {
    contentPath: './content/posts',
  },
  page: {
    contentPath: './content/pages',
  },
  mdx: {
    options: {},
  },
};

export type Config = typeof config;

export default config as Config;
