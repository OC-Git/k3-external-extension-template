/* eslint-disable react/no-unknown-property */
import { Keys } from '../Keys';
import { RechteckTabletop } from './RechteckTabletop';
import { KreisTabletop } from './KreisTableTop';
import { TableProps } from './Table';
import React, { useEffect } from 'react';

export const Tabletop = (props: TableProps) => {
  const {
    breite,
    laenge,
    staerke,
    form,
    schliff,
    bearbeitung,
    dekor,
    gestellhoehe,
  } = props;

  return (
    <group
      castShadow
      position={[0, gestellhoehe / 1000 + staerke / 1000 / 2, 0]}
    >
      {form!.key === Keys.form.rechteck && <RechteckTabletop {...props} />}
      {form!.key === Keys.form.kreisrund && <KreisTabletop {...props} />}
    </group>
  );
};
