import React from 'react';
const tmi = require('tmi.js');

const parseEmotes = (emotes, message) => {
  // sort emotes by last
  // replace emotes with images
  // return new message
  const sortedEmotes = emotes.sort((a, b) => {
    const [, aStart] = a;
    const [, bStart] = b;

    return parseInt(bStart, 10) > parseInt(aStart, 10) ? 1 : -1;
  });

  const messageWithEmotes = sortedEmotes.reduce((mem, val) => {
    const [emoteId, start, end] = val;

    const src = `https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0`;
    const srcset = `https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/3.0 4x`;

    const image = `<img src=${src} srcset=${srcset} class="emote" />`;

    const beginning = mem.substring(0, parseInt(start, 10));
    const ending = mem.substring(parseInt(end, 10) + 1);
    const updated = `${beginning}${image}${ending}`;

    return updated;
  }, message);

  return messageWithEmotes;
};

export default function useMessages({ channel, commands = {} }) {
  const [messages, setMessages] = React.useState([]);
  const [command, setCommand] = React.useState('');

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
      if (message.emotes) {
        message = parseEmotes(message.emotes, message);
      }

      if (message.match(/^(!|--)/)) {
        console.log('Does this fire?');
        const [command] = message.split(' ');
        const commandResult = commands[command.toLowerCase()];

        if (!commandResult) {
          return;
        }

        client.say(channel, commandResult);

        setCommand(message);
      }

      return setMessages([
        ...messages,
        { text: message, user: userstate.username },
      ]);
    });

    if (command.length > 0) {
      console.log({ command });
      setTimeout(() => setCommand(''), 3000);
    }

    return () => {
      console.log('Disconnecting from socket');
      return client.disconnect();
    };
  }, [messages]);

  return {
    messages,
    command,
  };
}

/*

Use this to acquire custom tokens for the webhooks
https://twitchtokengenerator.com/

*/
