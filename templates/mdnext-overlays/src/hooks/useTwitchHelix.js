import fetch from 'isomorphic-fetch';

export default async function useTwitchHelix({ params, token, clientId }) {
  async function twitchApi(params) {
    const res = await fetch(`https://api.twitch.tv/helix${params}`, {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        Authorization: `Bearer ${token}`,
        'Client-ID': clientId,
      },
    });

    return res.json();
  }

  const data = twitchApi(params);

  return data;
}
