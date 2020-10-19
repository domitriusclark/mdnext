import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import useChatListener from '@hooks/useChatListener';
import useEvent from '@hooks/useEvent';
import useTwitchHelix from '@hooks/useTwitchHelix';

import { Flex, Text, useToast } from '@chakra-ui/core';
import GuestCard from '@components/GuestCard';
import SceneContainer from '@components/SceneContainer';
import TwitchChatBox from '@components/TwitchChatBox';

const CHAT_COMMANDS = {
  '!test': 'This is a test response from your chat command 👍',
};

const ALERT_TIMER = 4000;

export default function MultiDiscussionScene({ frontMatter, streamDetails }) {
  const { connectListener, messages } = useChatListener({
    channel: 'domitriusClark ',
    commands: CHAT_COMMANDS,
  });

  const event = useEvent({
    disappear: ALERT_TIMER,
    channels: ['events'],
  });

  const [current, setCurrent] = React.useState(event);
  const [stale, setStale] = React.useState(false);
  const timeout = React.useRef();
  const toast = useToast();
  const router = useRouter();
  const urlRef = React.useRef(router.pathname);

  React.useEffect(() => {
    connectListener('on');
    return () => {
      if (urlRef.current !== router.pathname) {
        connectListener('off');
      }
    };
  }, [router.pathname]);

  React.useEffect(() => {
    if (current !== event) {
      clearTimeout(timeout.current);

      setStale(false);
      setCurrent(event);

      timeout.current = setTimeout(() => {
        setStale(true);
      }, ALERT_TIMER);
    }
  }, [event, current, stale, setStale, setCurrent]);

  return (
    <SceneContainer
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {!stale &&
        current &&
        toast({
          position: 'top',
          title: `${event.type} from ${event.from}`,
          duration: ALERT_TIMER,
          status: 'success',
        })}
      <Text fontSize="5xl" mb={8}>
        {streamDetails.title}
      </Text>
      <Flex w="100%" justifyContent="space-evenly">
        {frontMatter.guests.map((guest) => {
          return <GuestCard key={guest.name} guest={guest} />;
        })}
      </Flex>
      <TwitchChatBox
        direction="column"
        alignSelf="center"
        messages={messages}
      />
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
