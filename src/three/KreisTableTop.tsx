import { Cylinder } from '@react-three/drei';
import { TableProps } from './Table';
import { TableMaterial } from './TableMaterial';
import React from 'react';

export const KreisTabletop = (props: TableProps) => {
  const { laenge, staerke } = props;
  return (
    <Cylinder
      args={[laenge / 1000 / 2, laenge / 1000 / 2, staerke / 1000, 100]}
    >
      <TableMaterial {...props}></TableMaterial>
    </Cylinder>
  );
};
