import { addCallbacks, K3Extensions, K3Main, useGroups, useValues, useVariables } from "@k3/core";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { SuspenseLoader } from "./three/SuspenseLoader";
import { TableScene } from "./three/TableScene";

addCallbacks({
  saveConfiguration: (cfg) => {
    console.log('Saving configuration', cfg);
    return {
      ...cfg,
      label: 'Diese Konfiguration wurde von einem Callback umbenannt',
    };
  },
});

const extensions: K3Extensions = {
  app: {
    k3d: {
      root: () => TableScene,
    },
    configurator: {
      root: (Wrapped) => (props) => {
        const variables = useVariables();
        const groups = useGroups();
        const values = useValues();
        if (variables.length < 1 || groups.length < 1 || values.length < 1)
          return <SuspenseLoader />;
        return <Wrapped {...props} />;
      },
    },
  },
  components: {
    radio: (Wrapped) => (props) => {
      return (
        <Box component="div">
          <Typography>Ihre Auwahl:</Typography>
          <Wrapped
            {...props}
            onChange={(newValue) => {
              console.log('User selected valueId: ', newValue);
              props.onChange(newValue);
            }}
          />
          {props.variable.key === 'tischform' && (
            <Typography>
              Vielen Dank, dass Sie sich für{' '}
              {typeof props.value === 'object'
                ? props.value.label
                : props.value}{' '}
              entschieden haben.
            </Typography>
          )}
        </Box>
      );
    },
  },
};

export const App = () => (
  <K3Main
    extensions={extensions}
    contexts={[]}
    additionalDynamicSettings={[]}
  />
);
