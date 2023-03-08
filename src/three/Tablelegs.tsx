import { TableProps } from './Table';
import { Tableleg } from './Tableleg';
import React from 'react';

export const Tablelegs = (props: TableProps) => {
  return (
    <>
      <Tableleg {...props} position="left" />
      <Tableleg {...props} position="right" />
    </>
  );
};
