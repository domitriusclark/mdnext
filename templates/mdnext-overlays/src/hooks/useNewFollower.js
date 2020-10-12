import React from 'react';
import PubNub from 'pubnub';
import fetch from 'isomorphic-fetch';

const pn = new PubNub({
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
});

export default function useNewFollower({ disappear, channels }) {
  const [follower, setFollower] = React.useState('');

  React.useEffect(() => {
    fetch('/api/webhooks/ping');

    pn.subscribe({
      channels: [...channels],
    });

    pn.addListener({
      message: ({ message }) => {
        setFollower(message);
      },
    });

    setTimeout(() => {
      console.log('clear out the follower');
      setFollower('');
    }, disappear);
  }, [follower]);

  return {
    follower,
  };
}
