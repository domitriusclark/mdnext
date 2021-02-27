![Screenshot](https://arshad.io/uploads/mdnext-reflexjs.jpg)

# Build stunning websites

Blast off with the speed of **Nextjs**, the power of **MDX** and the best-in-class developer experience of [Reflexjs](https://reflexjs.org).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fdomitriusclark%2Fmdnext-reflexjs)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/domitriusclark/mdnext-reflexjs)

## Demo

https://mdnext-reflexjs.vercel.app/

## Features

Everything you expect and more.

- **Landing pages and blog** - Build landing pages and write blog posts using MDX
- **Customize everything** - Personalize your theme’s colors, typography...etc
- **Code blocks** - With line highlighting, title and line numbers
- **Built-in Search** - Powerful and lightweight fuzzy search
- **SEO** - With meta tags and open graph
- **Dark mode** - Optimized for light and dark modes.
- **Fully Accessible** - Compliant with WAI-ARIA

## Installation

Use the `mdnext` cli to create your MDNEXT + Reflexjs project.

```sh
npx mdnext reflexjs-site --template mdnext-reflexjs
```

## Usage

### Start the development server

```sh
npm run dev
```

Visit your development site at `http://localhost:3000`.

### Run the production build

```sh
npm run build
```

### Preview the production build

```sh
npm run start
```

Visit your production preview at `http://localhost:3000`.

## File structure

```
├── content
│ ├── pages
│ └── posts
├── pages
├── src
│ ├── components
│ ├── utils
│ ├── config.ts
│ └── theme.ts
├── types
└── tsconfig.json
```

### Breakdown

— **content**

This is where you place your MDX content. Pages go in the `pages` directory and blog posts go in the `posts` directory.

— **pages**

Use the top level `pages` directory for React-based pages. This is useful for building complex landing pages that might not be suited for MDX.

— **src/components**

Place your re-usable React components here. Every component exported in `src/components/index.ts` are available for import via `@component`.

```jsx
import { Layout } from '@components';
```

— **src/utils**

For utility helpers available for import via `@utils`.

```jsx
import { formatDate } from '@utils`
```

— **src/config.ts**

Holds configuration for your site such as the site name, copyright, blog options..etc.

— **src/theme.ts**

This is where you define your theme tokens. Use this file to customize the site colors, font sizes, typography and spacing.

## FAQ

### What's Reflexjs?

Reflexjs is a styling library that lets you style your React components using style props. It has support for theme tokens, color modes, mobile-first responsive values and variants as first-class citizen.

Example:

```jsx
export default function IndexPage() {
  return (
    <div variant="container.sm">
      <h1 variant="heading.h1" color="heading">
        Build stunning websites
      </h1>
      <p fontSize="2xl" mt="4" fontFamily="serif">
        This is some text.
      </p>
    </div>
  );
}
```

### How do I change the default colors?

Color tokens are defined under `colors` in `src/theme.ts`. You can change the text, background, primary and dark mode colors.

### How do I change the fonts?

The template uses Google fonts imported in `pages/_document.tsx`.

```tsx
<Head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap"
    rel="stylesheet"
  />
</Head>
```

Update the `href` here and then update the `fonts` key in `src/theme.ts`.

## Need help?

You can react out at [@arshadcn](https://twitter.com/arshadcn) or in the `#mdnext` channel on [Discord](https://discord.gg/partycorgi).
