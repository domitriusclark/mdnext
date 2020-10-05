module.exports = {
  plugins: [
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          // pass autoprefixer options here
        },
      },
    ],
  ],
};
