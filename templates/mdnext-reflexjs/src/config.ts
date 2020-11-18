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
      title: 'Twitter',
      url: '#',
    },
    {
      title: 'GitHub',
      url: '#',
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
