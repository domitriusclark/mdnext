import React from 'react';
import CanvasContainer from './../src/components/3d/canvas-container';
import GLTFModal from '../src/components/3d/gltf-model';
import Lights from '@components/3d/lights';
import { OrbitControls, Loader } from '@react-three/drei';
import { Layout } from '@components/Layout';
import CubeWithTexture from '@components/3d/cube-with-texture';

export default function Index() {
  return (
    <Layout>
      <div
        style={{
          height: '100vh',
        }}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#090d12',
            color: 'white',
            fontFamily: 'cursive',
            letterSpacing: 3,
            fontWeight: 400,
            padding: '1em',
          }}
        >
          <h1 style={{ marginBottom: '20px' }}>Welcome to MDNEXT-3D</h1>
          <h2>Take the models for a spin...</h2>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 600px))',
            gridAutoRows: 'auto',
            gap: '1em',
            justifyContent: 'space-evenly',
            padding: '1em',
          }}
        >
          <CanvasContainer
            width="auto"
            height="600px"
            position={[1, 0, 2]}
            fov={75}
            zoom={1}
          >
            <GLTFModal
              scenePath="/among-us/scene.gltf"
              position={[0, -1, 0]}
              rotation={[0, 0.01, 0]}
            />
            <Lights />
            <OrbitControls />
          </CanvasContainer>
          <CanvasContainer
            width="auto"
            height="600px"
            position={[1, 0, 2]}
            fov={75}
            zoom={1}
          >
            <CubeWithTexture
              position={[0, 0, 0]}
              rotation={[0.005, 0.005, 0]}
            />
            <Lights />
            <OrbitControls />
          </CanvasContainer>
          <CanvasContainer
            width="auto"
            height="600px"
            position={[1, 1, 2]}
            fov={75}
            zoom={1}
          >
            <GLTFModal
              scenePath="/skull-model/scene.gltf"
              position={[0, 0, 0]}
              rotation={[0, 0.005, 0]}
            />
            <Lights />
            <OrbitControls />
          </CanvasContainer>
        </section>
      </div>
      <Loader />
    </Layout>
  );
}
