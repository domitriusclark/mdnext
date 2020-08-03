// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter } from './blog/*.mdx';
import Fuse from 'fuse.js';

import {
  Flex,
  Input,
} from "@chakra-ui/core"
import ContentBox from '@components/ContentBox';


export default function Index({ blogPosts }) {
  const [query, updateQuery] = React.useState('');

  const fuse = new Fuse(blogPosts, {
    keys: ['tags', 'title'],
    threshold: 0.0
  })
  const results = fuse.search(query)
  const blogResults = query ? results.map(blog => blog.item) : blogPosts;

  function onSearch(e) {
    return updateQuery(e.target.value)
  }

  return (
    <Flex direction="column" m={16} alignItems="center" justify="center">
      <Input w="40%" onChange={e => onSearch(e)} />
      <Flex direction="column" justify="space-evenly" h="80vh">
        {blogResults.map(blog => <ContentBox blog={blog} key={blog.__resourcePath} />)}
      </Flex>
    </Flex>
  )
}

export async function getStaticProps() {
  return {
    props: {
      blogPosts: frontMatter
    }
  }
}