const fetch = require('isomorphic-fetch');

export default async (_, res) => {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/users?login=${process.env.CHANNEL}`,
      {
        headers: {
          authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          'Client-ID': process.env.CLIENT_ID,
        },
      },
    );

    const {
      data: [user],
    } = await response.json();

    const followersTopic = `https://api.twitch.tv/helix/users/follows?to_id=${user.id}&first=1`;
    const subscribersTopic = `https://api.twitch.tv/helix/subscriptions/events?broadcaster_id=${user.id}7&first=1`;

    await fetch('https://api.twitch.tv/helix/webhooks/hub', {
      method: 'POST',
      body: JSON.stringify({
        'hub.callback': `${process.env.CALLBACK_URL}/api/webhooks`,
        'hub.mode': 'subscribe',
        'hub.topic': followersTopic,
        'hub.lease_seconds': 60 * 60 * 4,
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        'Client-ID': process.env.CLIENT_ID,
      },
    });

    await fetch('https://api.twitch.tv/helix/webhooks/hub', {
      method: 'POST',
      body: JSON.stringify({
        'hub.callback': `${process.env.CALLBACK_URL}/api/webhooks`,
        'hub.mode': 'subscribe',
        'hub.topic': subscribersTopic,
        'hub.lease_seconds': 60 * 60 * 4,
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        'Client-ID': process.env.CLIENT_ID,
      },
    });
  } catch (error) {
    console.log(error);
  }

  res.send(200);
};
