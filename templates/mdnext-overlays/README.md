<!-- markdownlint-disable MD033 MD041 -->

![mdnext](./mdnext.png)

<div align="center">

Handle your twitch scenes through the web and bring all your favorite tools with you 🤓

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fdomitriusclark%2Fmdnext-overlays)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/domitriusclark/mdnext-overlays)

<br/>

</div>

---

- [Installation](#installation)
- [Usage](#usage)

---

## Installation

```bash
npx mdnext
```

- Fill in your project name
- Select mdnext-overlays

## Usage

This template is just the beginning of being able to host all of your scenes through the web.

If this is your first time using an `mdnext` template and you wanna know more about the base check out our [mdnext-starter]()

First let's drop into what's new in the file structure for `mdnext-overlays`

- **_pages/api/webhooks_**

This is where our webhooks are setup with Twitch for events ie Follow/Subscribe & more

- **_pages/scenes_**

This allows us to have each scene be it's own route and own the current scene's data in `getStaticProps`

- **_src/components_**

Some new components for usage around your scenes. They are preconfigured with some styles, but can be changed where you need!

- CameraContainer.js
  A simple container for your camera or your you and your guests camera in a scene.

- SceneContainer.js
  This is used to wrap all scenes in the proper sizing

- TwitchChatBox
  Use this to handle feeding your live chat into your scene

- **_src/hooks_**

These hooks allow you to interface with the twitch chat through `tmi.js` for things like chat commands, live feed of chat, and more found (here)[link the tmi.js docs]. They also make use of pubnub to leverage a connection to the webhooks setup in our api

- useChatListener.js
  This hook sets you up with a listener for changes in your chat. It comes configured with a message feed that listens for chat commands and delivers responses based off your chat

- useEvent.js
  The `useEvent` hook subscribed to pubnub to listen for incoming events from your Twitch like a new follow or subscription, recieves the type of event, and delivers who it's from.

- useTwitchHelix.js
  This hook can be used to interact with the Twitch Helix API for anything concerning your account, stream, and other info. You'll see we use it at the page level to feed stream info to `getStaticProps`

- **_src/scenes_**

This is where all the frontmatter data you need to fill your scene is sources. Anything hard coded you'd like can fit here, otherwise you'll be able to pull the data in through the page from the helix API.

## Services & Configs

We'll be using:

- cloudinary
  - CLOUD_NAME
  - CLOUDINARY_API_KEY
  - CLOUDINARY_API_SECRET
  - pubnub
    - PUBNUB_PUBLISH_KEY
    - PUBNUB_SUBSCRIBE_KEY
    - PUBNUB_SECRET_KEY
  - twitch
    - TWITCH_CHANNEL
    - TWITCH_CLIENT_ID
    - TWITCH_ACCESS_TOKEN
    - TWITCH_REFRESH_TOKEN
    - CALLBACK_URL
    - TWITCH_AUTH_TOKEN

For local testing you're going to want to use [ngrok]() so we can deliver a callback url for Twitch to use and us to listen to
