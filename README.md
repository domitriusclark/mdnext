<!-- markdownlint-disable MD033 MD041 -->

![mdnext](./mdnext.png)

<div align="center">

MDNEXT is an ecosystem of tools to get your NextJS + MDX projects blasting off :rocket:

<br/>

</div>

---

- [Quick Start](#quick-start-)
- [What is MDNEXT?](#what-is-mdnext-)
- [Understanding MDNEXT's structure](#understanding-mdnext-)
- [Templates](#templates-%EF%B8%8F)

---

# Quick start 🚀

Looking to start a new project?

```bash
# Using NPX we'll start up the mdnext CLI prompts --
npx mdnext

# You will first be prompted with.. --
What is the name of your project?

# Then you will choose which template to use
Select which template to use ...
```

Just want to access components in your `MDX` based apps?

```bash

# Even though we're a Next based ecosystem, our `MDX` components should be usable in most React based applications

yarn add @mdnext/components

or

npm i @mdnext/components
```

# What is MDNEXT? 🤔

`mdnext` is an ecosystem of tools to empower working with NextJS + MDX.

The `mdnext` CLI surfaces a collection officially maintained and community submitted templates to choose from. Once chosen, the project is cloned locally with a clean commit history and you're ready to build your next project.

`@mdnext/components` delivers accessible (thanks ChakraUI) and extendable components for working with `MDX`. These include things you've seen like `Code` components for styling code blocks or `Iframes` for embedding rich content to `MDX`

The `mdnext` template collection are NextJS based projects with opinions around how to style, handle `MDX` (and other data sources), deliver media, and handle your most usual workflows (ecomm / blogs / product pages). While there is an officially maintained collection of templates, I was excited to see and share what the community has created. I know there's many different opinions and comfortabilities as a web developer and want our ecosystem to be accessible.

# Understanding MDNEXT 📓

The basic structure of the `mdnext-starter` can be seen throughout all other templates at it's core of how it utilizes `MDX` and `Next`.

Getting to know this structure will help inform you of the current best practices that are being followed (which are free to interpretation!) and easy enough to plug and play. Let's dive into the starter:

**_`jsconfig.js`_**

NextJS lets us configure absolute paths for our app. We use this to easily import all of our functions and utilities inside of our `src` directory

**_`pages`_**

The pages directory defines your routing. Lifecycle methods like `getStaticProps` / `getStaticPaths` / `getServerProps` are available at the page level. This is where we consume our MDX content as data to pass to our components.

- `*_app.js*`
  NextJS allows you to override the App component, which is used to initialize pages. More [here](https://nextjs.org/docs/advanced-features/custom-app)
- `*_document.js*`: Allows you to augment our application's `<html>` and `<body>` tags.
- `all-data/index.js`: This page is an example of displaying links to all of your individual MDX data pages. Here we use `getStaticProps` to feed the frontmatter of our `MDX` files for our components.
- `data/[slug].js`: Here we utilize NextJS dynamic routing. By using `getStaticPaths` we're able to feed a dynamic slug, handling all of the logic once and applying it to each `MDX` data that we load. This allows us to then match to our data in `getStaticProps` and display that to the page and our components.
- `index.js`: Our page at the root of our app, lives inside of the `pages` directories `index.js`.

**_`src`_** 
Our `src` directory holds all of our client code. Our `components`, custom `hooks`, `utility` functions, and our `MDX` files all live here, with the first three available for absolute path imports 👍

**_`next.config.js`_**
For custom configuration around things like `environment variables`, `webpack`, `pageExtensions`, and many [more](https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63), you can utilize `next.config.js`

Each template will have it's own `README` with explicit documentation pertaining to the additions that make up the new configuration. Otherwise, you will find each template at it's core, starts similarly to `mdnext-starter`

# Templates 🏗️

The templates inside of `mdnext` were made to alleviate the friction when starting a new website. Blogs, personal sites, client work, etc can always feel very daunting to get started on.

What do we have to accomplish?

How do we handle styling?

How am I going to handle data?

What's the best way to integrate authentication?

The opinions in these templates will get you started quickly and allow you to customize however you see fit.

Our currently maintained templates:

- `mdnext-starter`
  This is the least opinionated template, that all templates are created from. It houses very minimal configuration and opinion outside of an example of sourcing `MDX` inside of `getStaticProps/Paths`
- `mdnext-blog`
  The blog templates adds features on top of our `mdnext-starter` . Specifically using `Chakra-UI`for styling. Configuration for blogs posts at the page and content level using our `MDX` files as routes. `FuseJS` for filtering our blogs posts.
- `mdnext-overlays`
  When becoming a new streamer you are met with many challenges. Eventually you're going to want to setup your own Scenes, animations, and interactions for your stream and it's viewers. Why not use the tools you love to create them? With this configuration you're set up with a base layer for configuring each new scene as a route. Each route contains ways to interact with Twitch API's, your Twitch chat, and information surrounding your stream and it's events!

Our community submitted templates:

- `mdnext-tailwind`
  Want to get up and running quickly with a `Tailwind` + `mdnext` project? This is the answer. A proper config alongside a collection of resources to get those new to `Tailwind` feel comfortable!
- `mdnext-twin-macro`
  This starter is configured with `twin.macro` as it's choice of styling. This allows you to utilize `Tailwind's` utility classes and `emotion's` `css` method for one off styles.
- `mdnext-graphcms`
  Utilizing `GraphCMS` as our datasource, we setup the basics for a blog. It starts you off with a simple example of how you can pull Markdown from GraphCMS and feed it to our UI with our `MDX`
- `mdnext-reflexjs`
  Reflexjs is a styling library built for speed and excellent developer experience. You can style your components using style props and constraints based on the System UI specifications. 

Want to submit a new template? Head over to our [Contributing section](https://github.com/domitriusclark/mdnext/blob/master/CONTRIBUTORS.md) and check out [mdnext-starter](https://github.com/domitriusclark/mdnext-starter)
