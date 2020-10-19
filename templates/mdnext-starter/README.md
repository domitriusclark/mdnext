<!-- markdownlint-disable MD033 MD041 -->

![mdnext](./mdnext.png)

<div align="center">

Welcome to `mdnext-starter`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fdomitriusclark%2Fmdnext-starter)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/domitriusclark/mdnext-starter)

<br/>

</div>

---

- [Installation](#installation)
- [Usage](#usage)

---

## Usage

Coming with a base understanding of the [NextJS opinions and documentation](https://nextjs.org/docs/getting-started), will give you a solid grasp on the structure of our templates.


# Breakdown

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

# Creating your own starter

To create a starter to add to our templates directory:

- Fork the `mdnext` repo
- run `mdnext`'s cli in the templates folder and select `mdnext-starter`
- Prepare some resources for your new additions to the template and update the README
