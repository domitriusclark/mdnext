<!-- markdownlint-disable MD033 MD041 -->

![mdnext](./mdnext.png)

<div align="center">

A CLI to get your projects up and running fast with opinionated NextJS + MDX starters

<br/>

</div>

---

- [Installation](#installation)
- [Usage](#usage)
- [Templates](#templates)

---

## Installation

You can either use directly with `npx`

```bash
npx mdnext
```

or

You can install it globally

```bash
yarn global add mdnext
```

then run `mdnext` to start the CLI prompts

```bash
mdnext
```

## Templates

MDNEXT itself is a collection of opinionated templates, focused on getting you up and running quickly with your NextJS + MDX based projects. Local content blogs, CMS powered solutions, and ecommerce ready sites all built around awesome tools from our ecosystem. These tools include:

- Different styling approaches
- Opinions for sourcing MDX
- Media optimization + management

& much more!

While these opinions may come installed, you are able to plug and play with your favorite tools as you see fit.
If you find yourself building out a project you think might be a useful template, definitely submit your project!

Currently supported templates:

- [mdnext-starter](https://github.com/domitriusclark/mdnext-starter) - This is the starter used to create new templates. This comes with a very minimal setup strictly for handling MDX with Next.

- [mdnext-blog](https://github.com/domitriusclark/mdnext-blog) -
  A blog based project that lays the ground work on how to handle MDX locally w/ an easy transition into remote data.

Community templates:

- [mdnext-twin-macro](https://github.com/domitriusclark/mdnext-twin-macro]) - Our starter configured to utilize [twin.macro]() for styling. This allows you to utilize [Tailwind's](https://tailwindcss.com/) utility classes and [Emotion's](https://emotion.sh/docs/introduction) CSS method for one off style! By [Will Harris](https://twitter.com/will__tweets)

* [mdnext-graphcms](https://github.com/domitriusclark/mdnext-graphcms) -
  Utilizing [GraphCMS](https://graphcms.com) as a datasource for our blog posts, gives an example of how you'd pull markdown from the CMS and use it in your Next project.
