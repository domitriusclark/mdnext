
// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogs } from './*.mdx';

import {
  Flex,
} from "@chakra-ui/core"

import ContentBox from "@components/ContentBox";
import Search from "@components/Search";


export default () => {
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs)

  const handleFilter = (data) => {
    setFilteredBlogs(data)
  }

  return (
    <Flex>
      {/* Content Area + Input + Tag filter */}
      <Flex direction="column" justify="center" alignItems="center" w="100%">
        <Search blogs={blogs} handleFilter={handleFilter} />
        <Flex direction="column" justify="space-evenly" h="80vh">
          {filteredBlogs.map(blog => <ContentBox key={blog.__resourcePath} blog={blog} />)}
        </Flex>
      </Flex>
    </Flex>
  )
}
