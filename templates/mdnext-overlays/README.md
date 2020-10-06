<!-- markdownlint-disable MD033 MD041 -->

![mdnext](./mdnext.png)

<div align="center">

The opinionated starter for your MDX + Next.js blogging projects!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fdomitriusclark%2Fmdnext-blog)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/domitriusclark/mdnext-blog)

<br/>

</div>

---

- [Installation](#installation)
- [Usage](#usage)
- [MDX w/ `next-mdx-remote`](#mdx-w-next-mdx-remote)
- [Built-in Search w/ Fuse.js](#built-in-search-w-fusejs)
- [Chakra UI -- Light + Dark Mode & Themeing](#chakra-ui----light--dark-mode--themeing)
- [Shoutouts](#shoutouts)
- [Contributing](#contributing)

---

## Usage

Out of the box this template comes with:

- Local MDX examples + how to handle parsing & rendering them
- Built in input & tag search
- A growing list of components to pass to MDX and get up and running fast (thanks to [Chakra UI](https://chakra-ui.com/))
- Code highlighting + built in copy functionality
- Built in light + dark mode
- SEO defaults + configuration
- Absolute import path support

Let's dig a bit into the tools used and where to get started in the project.

## MDX w/ `next-mdx-remote`

To focus on flexibility of where our markdown can be sourced, we utilize two functions from [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote).

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
  // statically render + hydrate content passed to us from our renderToString output
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

## Built-in Search w/ Fuse.js

A preconfigured `Search` component and accompanying page exist to demonstrate one way you can build out some search functionality for your content. [Fuse.js](https://fusejs.io) allows us to quickly build a fuzzy search (with a list of configurations) that we can use with Input or tag based searching.

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

## Chakra UI -- Light + Dark Mode & Themeing

Out of the box Light & Dark mode, combined with approachable & accessible components, direct theme config, and room to experiment for custom needs, gives this template the flexibility & cohesiveness to get you started on building your projects.

## Shoutouts

Wanted to highlight some projects + people that helped inspire + round out this template.

- [Ryan Warner](https://github.com/RyanWarner/next-mdx-digital-garden-starter)'s Next.js + MDX Digital Garden
- [Prince](https://github.com/maxcell/prince.dev)'s blog
- [Lee Robinson](https://github.com/leerob/leerob.io)'s blog

## Contributing

WIP!

Currently listing some discussion + features in [issues](https://github.com/domitriusclark/mdnext/issues)!
