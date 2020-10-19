import React from 'react';
import tmi from 'tmi.js';

import parseEmotes from '@utils/parseEmotes';

/*

  Use this to acquire custom tokens for the webhooks
  https://twitchtokengenerator.com/

*/

export default function useChatListener({ channel, commands = {} }) {
  const [messages, setMessages] = React.useState([]);
  const [command, setCommand] = React.useState();

  const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true,
    },
    channels: [channel],
    identity: {
      username: 'domitriusclark',
      password: process.env.AUTH_TOKEN,
    },
  });

  function connectListener(value) {
    if (value === 'on') {
      console.log('Turning on the chat client');
      return client.connect();
    } else if (value === 'off') {
      console.log('Turning off the chat client');
      return client.disconnect();
    }
  }

  React.useEffect(() => {
    client.on('chat', async (channel, userstate, message, self) => {
      if (message.emotes) {
        message = parseEmotes(message.emotes, message);
      }

      if (message.match(/^(!|--)/)) {
        const [command] = message.split(' ');
        const commandResult = commands[command.toLowerCase()];

        if (!commandResult) {
          return;
        }

        setMessages((prev) => [
          ...prev,
          { text: message, user: userstate.username },
        ]);

        await client.say(channel, commandResult);

        return setCommand(message);
      }

      return setMessages((prev) => [
        ...prev,
        { text: message, user: userstate.username },
      ]);
    });
  }, []);

  return {
    connectListener,
    messages,
    command,
  };
}
