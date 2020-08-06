import React, { useState } from 'react';
import Fuse from 'fuse.js';

import {
  Flex,
  Button,
  Stack,
  Input
} from "@chakra-ui/core";

const TAG_LIST = [
  "react",
  "nextjs",
  "chakra ui"
];

const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['frontMatter.title', 'frontmatter.tags',]
};

export default function Search({ blogs, handleFilter }) {
  // TODO: Put query into the url
  const [searchValue, setSearchValue] = useState('');
  const [searchTags, setSearchTags] = useState([]);
  const fuse = new Fuse(blogs, fuseOptions);

  React.useEffect(() => {
    if (searchValue === '' && searchTags.length === 0) {
      handleFilter(blogs);
    } else {
      // Allow for a search for tag
      const formattedTags = [...searchTags.map(item => ({ tags: item }))]
      const formattedTitle = searchValue.length ? [{ title: searchValue }] : []
      const queries = {
        $or: [
          { tags: searchValue },
          { title: searchValue },
          {
            $and: [...formattedTags, ...formattedTitle]
          }
        ]
      }
      const results = fuse.search(queries).map(result => result.item);
      handleFilter(results)
    }
  }, [searchValue, searchTags])

  const onChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  const onTagClick = (tag) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter(included => included != tag))
    } else {
      setSearchTags([...searchTags, tag])
    }
  }

  return (
    <Flex direction="column" w={["100%", '75%', "50%"]}>
      <Flex justify="space-around">
        <Stack spacing={4}>
          {TAG_LIST.map(tag => (
            <Button onClick={() => onTagClick(tag)}>
              #{tag}
            </Button>
          ))}
        </Stack>
      </Flex>
      <Input mt={6} value={searchValue} onChange={onChange} />
    </Flex>
  )
}