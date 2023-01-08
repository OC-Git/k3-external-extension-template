/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSetThreeKey } from '@k3/core';
import {
  Bounds,
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { SuspenseLoader } from './SuspenseLoader';
import { Table } from './Table';
import React from 'react';

export const TableScene = () => {
  useSetThreeKey();

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Canvas
        shadows
        camera={{ position: [10, 10, 10], fov: 40 }}
        onCreated={(e) => ((window as any).oc3 = e)}
      >
        <Bounds fit clip observe damping={10} margin={1.2}>
          <Table></Table>
        </Bounds>

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
        />
        <Sky distance={450000} sunPosition={[0, 1, 0]}></Sky>
        <Environment preset="apartment"></Environment>
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2}></OrbitControls>
      </Canvas>
    </Suspense>
  );
};
