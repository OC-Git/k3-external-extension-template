import React from 'react';
import {
  K3Extensions,
  K3Main,
  ProvidedExtensionsProvider,
  useGroups,
  useValues,
  useVariables,
} from '@k3/core';
import { TableScene } from './three/TableScene';
import { SuspenseLoader } from './three/SuspenseLoader';

const extensions: K3Extensions = {
  app: {
    k3d: {
      root: () => () => <TableScene></TableScene>,
    },
    configurator: {
      root: (Wrapped) => (props) => {
        const variables = useVariables();
        const groups = useGroups();
        const values = useValues();
        if (variables.length < 1 || groups.length < 1 || values.length < 1)
          return <SuspenseLoader />;
        return <Wrapped {...props}></Wrapped>;
      },
    },
  },
};

export const App = () => {
  return (
    <ProvidedExtensionsProvider extensions={extensions}>
      <K3Main />
    </ProvidedExtensionsProvider>
  );
};
