/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
import { TableProps } from './Table';
import { useGLTF } from '@react-three/drei';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import React from 'react';

export const Tableleg = (
  props: TableProps & { position: 'left' | 'right' }
) => {
  const modelPath = `assets/frames/${props.gestell?.key}.gltf`;
  const gltf = useGLTF(modelPath);
  const copiedScene = useMemo(() => {
    return gltf.scene.clone();
  }, [gltf.scene]);

  useLayoutEffect(() => {
    copiedScene.traverse(
      (obj) =>
        (obj as any).isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });


  const positionsFaktor = props.position === 'left' ? 1 : -1;
  return (
    <group
      position={[
        0,
        0,
        (positionsFaktor * props.laenge) / 2 / 1000 + positionsFaktor * -0.25,
      ]}
    >
      <primitive object={copiedScene} />
    </group>
  );
};
