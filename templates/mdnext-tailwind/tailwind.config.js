module.exports = {
  future: {
    // Enable these to remove CLI warnings.
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      // See: https://tailwindcss.com/docs/customizing-colors#extending-the-default-palette
      colors: {
        'my-custom-color': 'rebeccapurple',
      },
    },
  },
  variants: {},
  plugins: [],
};
