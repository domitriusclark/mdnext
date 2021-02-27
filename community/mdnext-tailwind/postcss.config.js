module.exports = {
  plugins: [
    'tailwindcss',

    // The following is Next.js default PostCSS config.
    // See: https://nextjs.org/docs/advanced-features/customizing-postcss-config
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],

  // There has been issues which are fixed by converting the PostCSS
  // config to the object format. Replace the above config if needed.
  // See:
  // https://github.com/vercel/next.js/discussions/12271
  // https://github.com/vercel/next.js/discussions/16568
};
