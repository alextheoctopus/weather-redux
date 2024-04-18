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
    backgroundColor: "#A8A4D9",
    position: "absolute",
    marginInline: "auto",
    insetInline: 0,
    insetBlockStart: "50 %",
    transform: "translateY(-50 %)",
  };//сделать норм бегунок

  const defineAuto = () => {
    getAutoUserPosition(dispatch);
    dispatch(setCity(null));
    setLoc(false);
  }
  return (
    <Box borderRadius={5} width={"245px"} height={"414px"}
      sx={BoxStyle} marginInline={"auto"} >
      <Button margin={"auto"} onClick={defineAuto}>
        <Typography color={"white"} border="1px grey solid" borderRadius={5} padding={'1%'} fontSize={14}>Define automatically</Typography>
      </Button>
      <CountriesList dispatch={dispatch} setLoc={setLoc}></CountriesList>
    </Box >
  );
}