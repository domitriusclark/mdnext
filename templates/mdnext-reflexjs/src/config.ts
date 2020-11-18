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
      pathnames: ['/blog/[...slug]'],
    },
  ],
  blog: {
    contentPath: './content/blog',
  },
  mdx: {
    options: {},
  },
};

export type Config = typeof config;

export default config as Config;
