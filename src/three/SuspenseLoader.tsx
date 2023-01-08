import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useProgress } from '@react-three/drei';
import React from 'react';

export const SuspenseLoader = () => {
  const { progress } = useProgress();
  const url = 'assets/sw.png';
  return (
    <Box
      height={'100%'}
      width={'100%'}
      bgcolor={'white'}
      component={'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={url} alt={'loading screen'} className={'loader'} />
      <br></br>
      <Typography variant="h3">{progress.toFixed(2)} %</Typography>
    </Box>
  );
};
