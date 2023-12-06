/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import { TableProps } from './Table';
import React from 'react';

export const TableMaterial = (props: TableProps) => {
  const materialPath = `assets/decors/${props.dekor?.key}`;
  const colorMap = useLoader(TextureLoader, materialPath + '/baseColor.jpg');

  useEffect(() => {
    [colorMap].forEach((map) => {
      map.offset.set(1, 1);
      map.wrapS = map.wrapT = THREE.MirroredRepeatWrapping;
      map.repeat.set(1, 1);
      map.needsUpdate = true;
    });
  }, [props.laenge, props.breite, props.dekor]);
  return (
    <meshStandardMaterial
      map={colorMap}
      roughness={1}
      metalness={0}
      envMapIntensity={0.75}
    />
  );
};
