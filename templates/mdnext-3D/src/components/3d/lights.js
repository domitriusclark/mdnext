import React from 'react';

/**
 * Basic lights
 */
const Lights = () => (
  <>
    <directionalLight position={[10, 10, 5]} intensity={5} />
    <directionalLight position={[-10, -10, -5]} intensity={1} />
    <hemisphereLight intensity={2} />
  </>
);

export default Lights;
