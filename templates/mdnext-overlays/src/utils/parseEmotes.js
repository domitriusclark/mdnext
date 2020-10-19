export default function parseEmotes(emotes, message) {
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
}
