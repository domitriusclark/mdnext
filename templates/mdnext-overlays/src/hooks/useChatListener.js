import React from 'react';
import tmi from 'tmi.js';

export default function useChatListener({ commands, channel }) {
  const [command, setCommand] = React.useState('');

  // We should take an argument for CHAT_COMMANDS ✅

  // Setup connection with Twitch to listen for messages
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

  React.useEffect(() => {
    client.connect();

    client.on('chat', (channel, userstate, message, self) => {
      // Check to make sure the chat message is a command & exists
      if (message.match(/^(!|--)/)) {
        const [command] = message.split(' ');
        const commandResult = commands[command.toLowerCase()];

        if (!commandResult) {
          return;
        }

        client.say(channel, commandResult);
      }

      setCommand(message);
    });

    setTimeout(() => setCommand(''), 4000);

    return () => client.off;
  }, [command]);

  return {
    command,
  };
}
