import React from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

/**
 * A cube with a texture on each side.
 * @param {Array} position - The position on the canvas the model should take
 * @param {Array} rotation - Optional rotation of the model. If provided [x, y, z] values are mapped to the useFrame hook which will rotate the model in the given direction(s)
 */
const CubeWithTexture = ({ position, rotation, ...rest }) => {
  // Load the texture. This is a single texture that will be placed on all 6 sides of the cube
  const [texture] = useTexture(['/chicken.jpg']);
  const mesh = React.useRef();
  useFrame(() =>
    rotation
      ? ((mesh.current.rotation.x += rotation[0]),
        (mesh.current.rotation.y += rotation[1]),
        (mesh.current.rotation.z += rotation[2]))
      : null,
  );
  return (
    <mesh ref={mesh} {...rest} position={position}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default CubeWithTexture;
