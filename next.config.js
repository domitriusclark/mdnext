const withMDXEnhanced = require('next-mdx-enhanced');

module.exports = withMDXEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
})()
