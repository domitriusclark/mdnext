const config = {
  site: {
    name: 'MDNEXT',
    copyright: `© ${new Date().getFullYear()} MDXNEXT = MDX + Nextjs`,
  },
  bio: {
    heading: "Hey, I'm Emily 👋",
    text: 'I code, design and run a podcast.',
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
