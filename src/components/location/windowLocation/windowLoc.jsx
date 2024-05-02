import React from 'react'
import { getAutoUserPosition } from '../../../store/actions/Actions';
import { useContext } from 'react';
import { Box, Button, Typography, Stack, Input } from '@mui/material';
import { AppContext } from '../../AppContext';
import { CountriesList } from './CountriesList';
import { setCity, setCoords } from '../../../store/features/location';


export function WindowLoc({ dispatch }) {
  let { setLoc } = useContext(AppContext);
  let BoxStyle = {
    marginTop: "10%",
    zIndex: 100,
    overflowX: 'auto',
    backgroundColor: "#EEEDED",
    position: "absolute",
    marginInline: "auto",
    insetInline: 0,
    insetBlockStart: "50 %",
    transform: "translateY(-50 %)",
    border: "2mm solid #0E3E6E",
  };

  const defineAuto = () => {
    getAutoUserPosition(dispatch);
    dispatch(setCity(null));
    setLoc(false);
  }
  return (
    <Box sx={{ position: "absolute", zIndex: "100", width: "100%", height: "100vmax", background: "rgba(90, 135, 189, 0.72)" }}>
      <Stack direction={'column'}>
        <Button onClick={() => setLoc(false)} sx={{ margin: "auto", marginTop: "7%", width: "20px", zIndex: 101, height: "20px", background: "red" }} variant='outlined'>
          <Typography>Х</Typography>
        </Button>
        <Box borderRadius={5} width={"245px"} height={"414px"}
          sx={BoxStyle} marginInline={"auto"} >
          <Button margin={"auto"} onClick={defineAuto}>
            <Typography color={"#343434"} fontWeight={"Bold"} border="1px solid #0E3E6E" borderRadius={5} padding={'1%'} fontSize={14}>Define automatically</Typography>
          </Button>
          <CountriesList dispatch={dispatch} setLoc={setLoc}></CountriesList>
        </Box >
      </Stack>
    </Box >
  );
}