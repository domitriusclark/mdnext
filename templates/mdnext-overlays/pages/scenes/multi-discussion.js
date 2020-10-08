import { promises as fs } from 'fs';
import matter from 'gray-matter';
const tmi = require('tmi.js');

import { Flex, Box, Text, Heading, Icon } from '@chakra-ui/core';
import SceneContainer from '@components/SceneContainer';
import { FaTwitter } from 'react-icons/fa';

function GuestCard({ guest }) {
  return (
    <Flex
      height="300px"
      width="300px"
      border="2px solid black"
      borderRadius="8px"
      alignItems="flex-start"
    >
      <Flex
        alignItems="center"
        w="50%"
        justifyContent="space-between"
        alignSelf="flex-end"
      >
        <Text size="lg">{guest.name}</Text>
        <Icon as={FaTwitter} />
      </Flex>
    </Flex>
  );
}

export default function MultiDiscussion({ frontMatter }) {
  const [messages, setMessages] = React.useState([]);
  const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true,
    },
    channels: ['domitriusclark'],
  });

  client.connect();
  React.useEffect(() => {
    client.on('chat', (channel, userstate, message, self) => {
      // Do your stuff.
      return setMessages([...messages, message]);
    });
  }, [messages]);
  return (
    <SceneContainer>
      <Flex height="100%" w="100%" alignItems="center" justifyContent="center">
        {frontMatter.guests.map((guest) => {
          return <GuestCard guest={guest} />;
        })}
      </Flex>
      {messages.map((message) => (
        <Text>{message}</Text>
      ))}
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
