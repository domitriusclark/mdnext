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

# 3D

This template uses react-three-fiber, three, cannon and drei to enable you to create a 3D rich experience for your users.

The template ships with some base components to get you up and running implementing 3D models and effects, these include:

- CanvasContainer
  - Anything that is 3D has to go in a canvas.
- GLTFModel
- Lights
- CubeWithTexture

When using models download the gltf pack and unzip the contents in the public folder. If using multiple models create a new folder within public that will house each model. The same applies to textures. Utilizing the public folder enables us to easily access the textures and models from anywhere within our app.

### 3D Resources

- [react-three-fiber docs](https://github.com/pmndrs/react-three-fiber)
- [threejs docs](https://threejs.org/docs/)
- [@react-three/drei docs](https://github.com/pmndrs/drei)
- [@react-three/cannon docs](https://github.com/pmndrs/use-cannon)
- [Sketchfab - Free and paid models](https://sketchfab.com/feed)
- [Skull model](https://sketchfab.com/3d-models/skull-salazar-downloadable-eeed09437afb4e1ea8a6ff3b0e9964ad)
- [Among Us model](https://sketchfab.com/3d-models/among-us-astronaut-clay-20b591de51eb4fc3a4c5a4d40c6011d5)
