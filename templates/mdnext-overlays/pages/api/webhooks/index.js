const PubNub = require('pubnub');

const pn = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
});

export default async (req, res) => {
  if (req.method === 'GET') {
    console.log('GET');
    res.status(200).send(req.query['hub.challenge']);
  } else if (req.method === 'POST') {
    console.log('POSTED');

    let followers = [];
    const follow = req.body.data[0].from_name;
    followers.push(follow);

    pn.publish(
      {
        channel: 'twitch-follower',
        message: followers[0],
      },
      (status, response) => console.log({ status, response }),
    );

    res.send(200);
  }
};
