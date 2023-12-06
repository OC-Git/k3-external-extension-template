import { Suspense, useEffect } from 'react';
import React from 'react';
import { Tabletop } from './Tabletop';
import { Tablelegs } from './Tablelegs';
import { TableProps } from './Table';
import { useBounds } from '@react-three/drei';

export const InnerTable = (props: { tableInformation: TableProps }) => {
  const bounds = useBounds();

  useEffect(() => {
    if (bounds) {
      bounds.refresh().clip().fit();
    }
  }, [props.tableInformation.laenge, props.tableInformation.breite]);

  return (
    <>
      <Tabletop {...props.tableInformation} />
      <Tablelegs {...props.tableInformation} />
    </>
  );
};
