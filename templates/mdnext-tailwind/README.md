<!-- markdownlint-disable MD033 MD041 -->

![mdnext](./mdnext.png)

<div align="center">

Welcome to `mdnext-tailwind`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fdomitriusclark%2Fmdnext-tailwind)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/domitriusclark/mdnext-tailwind)

<br/>

</div>

---

- [Usage](#usage)
- [File structure](#file-structure)
- [Breakdown](#breakdown)
- [Tailwind](#tailwind)
  - [Tailwind Resources](#tailwind-resources)

---

## Usage

Coming with a base understanding of the [NextJS opinions and documentation](https://nextjs.org/docs/getting-started), will give you a solid grasp on the structure of our templates.

## File structure

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e0ceedc-c244-488f-b984-4bc507a81348/Screen_Shot_2020-09-04_at_1.51.10_AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e0ceedc-c244-488f-b984-4bc507a81348/Screen_Shot_2020-09-04_at_1.51.10_AM.png)

## Breakdown

— **_jsconfig.js_**

NextJS lets us configure absolute paths for our app. We use this to easily import all of our functions and utilities inside of our `src` directory

— **_pages_**

The pages directory defines your routing. Lifecycle methods like `getStaticProps` / `getStaticPaths` / `getServerProps` are available at the page level. This is where we consume our MDX content as data to pass to our components.

`_app.js`:
NextJS allows you to override the App component, which is used to initialize pages. More [here](https://nextjs.org/docs/advanced-features/custom-app)

`_document.js`:
Allows you to augment our application's `<html>` and `<body>` tags.

`all-data/index.js`:
This page is an example of displaying links to all of your individual MDX data pages. Here we use `getStaticProps` to feed the frontmatter of our `MDX` files for our components.

`data/[slug].js`:
Here we utilize NextJS dynamic routing. By using `getStaticPaths` we're able to feed a dynamic slug, handling all of the logic once and applying it to each `MDX` data that we load. This allows us to then match to our data in `getStaticProps` and display that to the page and our components.

`index.js`:
Our page at the root of our app, lives inside of the `pages` directories `index.js`.

— **_src_**
Our `src` directory holds all of our client code. Our `components`, custom `hooks`, `utility` functions, and our `MDX` files all live here, with the first three available for absolute path imports 👍

— **_next.config.js_**
For custom configuration around things like `environment variables`, `webpack`, `pageExtensions`, and many [more](https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63), you can utilize `next.config.js`

---

## Tailwind

This template uses the utility-first CSS framework **Tailwind** for styling. Take a look at the following files to get started.

— **_tailwind.config.js_**

Blank Tailwind configuration with the `purge` option to remove unused CSS in production, thus keeping the resulting CSS file small, and `theme.extend.colors` to add a custom color palette.

— **_postcss.config.js_**

PostCSS configuration file. Other than Tailwind, it uses Next.js's [default PostCSS configuration](https://nextjs.org/docs/advanced-features/customizing-postcss-config).

— **_src/tailwind.css_**

CSS file containing the `@tailwind` directive. It also contains examples of Tailwind's `@apply` directive and custom styles. You can rename and move it as you wish, but make sure you adjust the import path in `pages/_app.js`.

You can see examples of Tailwind CSS in action in these component files, `src/components/ContentBox.js` and `src/components/Navbar.js`.

### Tailwind Resources

- [Tailwind Documentation](https://tailwindcss.com/)
  - [Configuration](https://tailwindcss.com/docs/configuration)
  - [Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
  - [Directives](https://tailwindcss.com/docs/functions-and-directives) (`@tailwind`, `@apply`, `@layer`, etc)
- [Official Tailwind component examples](https://tailwindcss.com/components) – UI components
- [Tailwind Components](https://tailwindcomponents.com/) – free UI components by the community
- [Tailwind cheat sheet](https://tailwindcomponents.com/cheatsheet/)
- [Awesome Tailwind CSS](https://github.com/aniftyco/awesome-tailwindcss) – more Tailwind resources
