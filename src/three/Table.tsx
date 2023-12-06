import {
  useSelectedNumberByVariableKey,
  useSelectedValueAttributeByKey,
  useSelectedValueByVariableKey,
  Value,
} from '@k3/core';
import { Suspense, useEffect } from 'react';
import { Tablelegs } from './Tablelegs';
import { Tabletop } from './Tabletop';
import React from 'react';
import { InnerTable } from './InnerTable';

export interface TableProps {
  breite: number;
  laenge: number;
  staerke: number;
  gestell: Value | null;
  gestellhoehe: number;
  form: Value | null;
  schliff: number;
  bearbeitung: Value | null;
  dekor: Value | null;
}

export const Table = () => {
  const breite = useSelectedNumberByVariableKey('breite') || 0;
  const laenge = useSelectedNumberByVariableKey('laenge') || 0;
  const staerke =
    (useSelectedValueAttributeByKey('staerke', 'staerke')?.value as number) ||
    0;
  const form = useSelectedValueByVariableKey('tischform') || null;
  const schliff =
    (useSelectedValueAttributeByKey('schliff', 'schliff')?.value as number) ||
    0;
  const gestell = useSelectedValueByVariableKey('gestell') || null;
  const bearbeitung = useSelectedValueByVariableKey('bearbeitung') || null;
  const dekor = useSelectedValueByVariableKey('dekor') || null;
  const gestellhoehe =
    (useSelectedValueAttributeByKey('gestell', 'gestellhoehe')
      ?.value as number) || 0;
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

  if (
    !breite ||
    !laenge ||
    !staerke ||
    !form ||
    !schliff ||
    !bearbeitung ||
    !dekor ||
    !gestellhoehe
  ) {
    return <></>;
  }

  return (
    <group name="k3d" key="k3d">
      <InnerTable tableInformation={tableInformation}></InnerTable>
    </group>
  );
};
