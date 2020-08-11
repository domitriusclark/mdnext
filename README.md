# ✨ MDNEXT ✨

---

The opinionated starter for your MDX + Next needs.
<br />
<br />
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fdomitriusclark%2Fnextjs-mdx)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/domitriusclark/nextjs-mdx)

# Installation

We're going to apply this repo as a template to `create-next-app`

```bash
npx create-next-app your-project-name -e https://github.com/domitriusclark/nextjs-mdx
```

or

```base
yarn create next-app your-project-name -e https://github.com/domitriusclark/nextjs-mdx
```

# Usage

Out of the box this template comes with:

- Local MDX examples + how to handle parsing + rendering them
- Built in input & tag search
- A growing list of components to pass to MDX and get up and running fast (thanks to Chakra)
- Code highlighting + built in copy functionality
- Light + Dark mode (with a persisted cookie based config)
- SEO setup
- Absolute import path config

Let's dig a bit into the tools used and where to get started in the project.

# MDX w/ `next-mdx-remote`

To handle MDX flexibly -- mainly to allow MDX to come from any source,not just locally -- we utilize two functions from [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)

- `renderToString(source: string, components: object, options?: object, scope?: object)`
  This function consumes a string of mdx along with any components it utilizes in the format { ComponentName: ActualComponent }. It also can optionally be passed options which are passed directly to mdx, and a scope object that can be included in the mdx scope. The function returns an object that is intended to be passed into hydrate directly.

- `hydrate(source: object, components: object)`
  This function consumes the output of renderToString as well as the same components argument as renderToString. Its result can be rendered directly into your
  component. This function will initially render static content, and hydrate it when the browser isn't busy with higher priority tasks.

These functions allow us to parse MDX as a source in our lifecycle methods like `getStaticProps` and `getStaticPaths` so we can statically generate content based on our MDX and finish by giving us the output from `renderToString` with something we can render.

```jsx
// -- /pages/blog/[slug].js

import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import fs from 'fs';
import matter from 'gray-matter';
import glob from 'fast-glob';

import Iframe from '@components/Iframe';
import Code from '@components/Code';

// Components that pass to the MDX
const components = { code: Code, Iframe };

export default ({ mdxSource, frontMatter }) => {
  // we now have the string passed from renderToString that we can turn into something we can render
  const content = hydrate(mdxSource, components);

  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {content}
    </div>
  );
};

// This glob is what will be used to generate static routes
const contentGlob = 'src/blogs/*.mdx';

export async function getStaticPaths() {
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    const split = file.split('/');
    const filename = split[split.length - 1];
    const slug = filename.replace('.mdx', '');

    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const fullPath = files.filter((item) => {
    const split = item.split('/');
    const filename = split[split.length - 1];
    return filename.replace('.mdx', '') === slug;
  })[0];

  const mdxSource = fs.readFileSync(fullPath);
  const { content, data } = matter(mdxSource);

  if (!fullPath) {
    console.warn('No MDX file found for slug');
  }

  const mdx = await renderToString(content, components, null, data);

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}
```

# Built in search w/ fuse.js

A preconfigured `Search` component and accompanying page exist to demonstrate how you can build search easily into your site for your content. [Fuse.js](https://fusejs.io/) allows us to very easily build a fuzzy search (with a list of configurations) that we can use with Input or tag based searching.

```jsx
// -- /src/components/Search.js

import React, { useState } from 'react';
import Fuse from 'fuse.js';

import { Flex, Button, Stack, Input } from '@chakra-ui/core';

const TAG_LIST = ['react', 'nextjs', 'chakra ui'];

// Configuration options for refining your fuzzy search
const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['title', 'tags'],
};

export default function Search({ blogs, handleFilter }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchTags, setSearchTags] = useState([]);

  // New instance of your search w/ the content it's searching and the options from your config
  const fuse = new Fuse(blogs, fuseOptions);

  React.useEffect(() => {
    if (searchValue === '' && searchTags.length === 0) {
      handleFilter(blogs);
    } else {
      // Allow for a search for tag
      const formattedTags = [...searchTags.map((item) => ({ tags: item }))];
      const formattedTitle = searchValue.length ? [{ title: searchValue }] : [];
      const queries = {
        $or: [
          { tags: searchValue },
          { title: searchValue },
          {
            $and: [...formattedTags, ...formattedTitle],
          },
        ],
      };
      const results = fuse.search(queries).map((result) => result.item);
      handleFilter(results);
    }
  }, [searchValue, searchTags]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onTagClick = (tag) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter((included) => included != tag));
    } else {
      setSearchTags([...searchTags, tag]);
    }
  };

  return (
    <Flex direction="column" w={['100%', '75%', '50%']}>
      <Flex justify="space-around">
        <Stack spacing={4}>
          {TAG_LIST.map((tag) => (
            <Button onClick={() => onTagClick(tag)}>#{tag}</Button>
          ))}
        </Stack>
      </Flex>
      <Input mt={6} value={searchValue} onChange={onChange} />
    </Flex>
  );
}
```

# Chakra -- Light + Dark Mode & themeing

Using the (currently experimental) v1 of Chakra, there was some new conversation about how to handle persisting a theme choice, especially when utilizing static + server rendering from specifically a NextJS perspective. The solution internally was to set a cookie to persist the theme, then read from that cookie to remove any flicker.

Besides that, the component library itself comes with many goodies for things like configuring a theme, creating custom components through their `Box` model, and utilizing the many components / configurations given by default in Chakra 🥳

If you need to make changes to the theme or config of Dark & Light mode, look at `/pages/_app.js` / `/src/components/ThemeToggleButton` / `/src/hooks/useThemePersistance`

# Shoutouts

Wanted to highlight some projects + people that helped inspire + round out this template.

- [Ryan Warner](https://github.com/RyanWarner/next-mdx-digital-garden-starter)'s NextJS + MDX Digital Garden
- [Prince](https://github.com/maxcell/prince.dev)'s Blog
- [Lee Robinson](https://github.com/leerob/leerob.io)'s blog

# TODO

- [ ] Build out a more useful base of components to pass to our MDX
- [ ] Some tests
- [ ] Improved Lighthouse scores (currently 80+ in all, but would love to push this further)
- [ ] Examples of different CMS choices in an 'examples' directory
