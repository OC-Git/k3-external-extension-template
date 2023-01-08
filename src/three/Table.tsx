import {
  useSelectedNumberByVariableKey,
  useSelectedValueAttributeByKey,
  useSelectedValueByVariableKey,
  Value,
} from '@k3/core';
import { Suspense, useEffect } from 'react';
import { Tablelegs } from './Tablelegs';
import { Tabletop } from './Tabletop';
import { useBounds } from '@react-three/drei';
import React from 'react';

export interface TableProps {
  breite: number;
  laenge: number;
  staerke: number;
  gestell: Value;
  gestellhoehe: number;
  form: Value;
  schliff: number;
  bearbeitung: Value;
  dekor: Value;
}

export const Table = () => {
  const bounds = useBounds();
  const breite = useSelectedNumberByVariableKey('breite');
  const laenge = useSelectedNumberByVariableKey('laenge');
  const staerke = useSelectedValueAttributeByKey('staerke', 'staerke')
    ?.value as number;
  const form = useSelectedValueByVariableKey('tischform');
  const schliff = useSelectedValueAttributeByKey('schliff', 'schliff')
    ?.value as number;
  const gestell = useSelectedValueByVariableKey('gestell');
  const bearbeitung = useSelectedValueByVariableKey('bearbeitung');
  const dekor = useSelectedValueByVariableKey('dekor');
  const gestellhoehe = useSelectedValueAttributeByKey('gestell', 'gestellhoehe')
    ?.value as number;
  const tableInformation = {
    breite,
    laenge,
    staerke,
    gestellhoehe,
    gestell,
    form,
    schliff,
    bearbeitung,
    dekor,
  };

  useEffect(() => {
    if (bounds) {
      bounds.refresh().fit();
    }
  }, [breite, laenge]);

  return (
    <group name="k3d" key="k3d">
      <Suspense fallback={null}>
        <Tabletop {...tableInformation}></Tabletop>
      </Suspense>
      <Suspense fallback={null}>
        <Tablelegs {...tableInformation}></Tablelegs>
      </Suspense>
    </group>
  );
};
