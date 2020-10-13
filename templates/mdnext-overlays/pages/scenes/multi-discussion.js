import { promises as fs } from 'fs';
import matter from 'gray-matter';
import useNewFollower from '@hooks/useNewFollower';
import useTwitchHelix from '@hooks/useTwitchHelix';
import useMessages from '@hooks/useMessages';

import { Flex, Heading } from '@chakra-ui/core';
import GuestCard from '@components/GuestCard';
import SceneContainer from '@components/SceneContainer';
import TwitchChatBox from '@components/TwitchChatBox';
import FollowerAlert from '@components/FollowerAlert';

const CHAT_COMMANDS = {
  '!test': "Yo bro this test worked, you're the best",
};

export default function MultiDiscussionScene({
  frontMatter,
  currentUser,
  streamDetails,
}) {
  const { messages, command } = useMessages({
    channel: 'domitriusClark ',
    commands: CHAT_COMMANDS,
  });

  const { follower } = useNewFollower({
    disappear: 4000,
    channels: ['twitch-follower'],
  });

  return (
    <SceneContainer
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {follower && <FollowerAlert follower={follower} />}
      <Flex>
        <TwitchChatBox
          height="600px"
          width="300px"
          direction="column"
          border="6px solid yellow"
          ml={24}
          messages={messages}
        />

        <Flex w="100%" justifyContent="center">
          {frontMatter.guests.map((guest) => {
            return <GuestCard key={guest.name} guest={guest} />;
          })}
        </Flex>
      </Flex>
      {command && <p>This shows when a command fires in chat</p>}
      <Heading as="h1" size="lg">
        {streamDetails.title}
      </Heading>
    </SceneContainer>
  );
}

export async function getStaticProps() {
  const path = './src/scenes/multi-discussion.mdx';
  const mdxSource = await fs.readFile(path);
  const { _, data } = matter(mdxSource);

  const config = {
    token: process.env.ACCESS_TOKEN,
    clientId: process.env.CLIENT_ID,
  };

  const currentUser = await useTwitchHelix({
    params: `/users?login=${process.env.CHANNEL}`,
    ...config,
  });

  const streamDetails = await useTwitchHelix({
    params: `/channels?broadcaster_id=${currentUser.data[0].id}`,
    ...config,
  });

  return {
    props: {
      currentUser: currentUser.data[0],
      streamDetails: streamDetails.data[0],
      frontMatter: data,
    },
  };
}
