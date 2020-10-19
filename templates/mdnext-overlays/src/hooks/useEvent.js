import React from 'react';
import PubNub from 'pubnub';
import fetch from 'isomorphic-fetch';
import { useValue, useRepeater } from '@repeaterjs/react-hooks';

const pn = new PubNub({
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
});

export default function useEvent({ disappear, channels }) {
  const [follows, push, stop] = useRepeater();

  React.useEffect(() => {
    fetch('/api/webhooks/ping');

    pn.subscribe({
      channels: [...channels],
    });

    pn.addListener({
      message: ({ message }) => {
        push(message);
      },
    });

    return () => stop();
  }, []);

  const value = useValue(async function* () {
    for await (const follow of follows) {
      yield follow;
      await new Promise((resolve) => setTimeout(resolve, disappear));
    }
  });

  return value;
}
