import { promises as fs } from 'fs';
import matter from 'gray-matter';
import useFollower from '@hooks/useFollower';

import { Flex, Text, Icon } from '@chakra-ui/core';
import { FaTwitter } from 'react-icons/fa';
import SceneContainer from '@components/SceneContainer';
import TwitchChatBox from '@components/TwitchChatBox';
import FollowerAlert from '@components/FollowerAlert';

function GuestCard({ guest }) {
  return (
    <Flex
      height="400px"
      width="400px"
      border="2px solid black"
      borderRadius="8px"
      alignItems="flex-start"
      mr={24}
    >
      <Flex
        alignItems="center"
        w="50%"
        justifyContent="space-evenly"
        alignSelf="flex-end"
      >
        <Text>{guest.name}</Text>
        <Icon as={FaTwitter} />
      </Flex>
    </Flex>
  );
}

export default function MultiDiscussionScene({ frontMatter }) {
  const { follower } = useFollower();

  return (
    <SceneContainer display="flex" alignItems="center" justifyContent="center">
      <TwitchChatBox
        height="600px"
        width="300px"
        direction="column"
        border="6px solid yellow"
        ml={24}
      />
      {follower && <FollowerAlert follower={follower} />}
      <Flex w="100%" justifyContent="center">
        {frontMatter.guests.map((guest) => {
          return <GuestCard guest={guest} />;
        })}
      </Flex>
    </SceneContainer>
  );
}

export async function getStaticProps() {
  const path = './src/scenes/multi-discussion.mdx';
  const mdxSource = await fs.readFile(path);
  const { _, data } = matter(mdxSource);

  return {
    props: {
      frontMatter: data,
    },
  };
}
