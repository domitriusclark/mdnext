const withTM = require('next-transpile-modules')([
  'three',
  '@react-three/drei',
  'react-three-fiber',
  'postprocessing',
]);

module.exports = {
  env: {},
  target: 'serverless',
};
module.exports = withTM();
