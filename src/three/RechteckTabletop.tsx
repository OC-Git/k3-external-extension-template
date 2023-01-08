import { RoundedBox } from '@react-three/drei';
import { TableProps } from './Table';
import { TableMaterial } from './TableMaterial';
import React from 'react';

export const RechteckTabletop = (props: TableProps) => {
  const { breite, laenge, staerke, schliff } = props;
  return (
    <RoundedBox
      castShadow
      args={[breite / 1000, staerke / 1000, laenge / 1000]}
      radius={schliff}
    >
      <TableMaterial {...props}></TableMaterial>
    </RoundedBox>
  );
};
