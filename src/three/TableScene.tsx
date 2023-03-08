/* eslint-disable @typescript-eslint/no-explicit-any */
import { CanvasWithScreenshotting } from '@k3/core';
import {
  Bounds,
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from '@react-three/drei';
import { Suspense } from 'react';
import { SuspenseLoader } from './SuspenseLoader';
import { Table } from './Table';
import React from 'react';

export const TableScene = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <CanvasWithScreenshotting
        canvasProps={{
          shadows: true,
          camera: { position: [10, 10, 10], fov: 40 },
        }}
      >
        <Bounds fit clip observe damping={10} margin={1.2}>
          <Table />
        </Bounds>

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
          // Dreis types are weird
          matrixWorldAutoUpdate={undefined}
          getObjectsByProperty={undefined}
        />
        <Sky distance={450000} sunPosition={[0, 1, 0]} />
        <Environment preset="apartment" />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} />
      </CanvasWithScreenshotting>
    </Suspense>
  );
};
