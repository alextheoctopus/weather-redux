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
    position: 'absolute', marginLeft: "5%", marginTop: "8%", zIndex: 10, overflowX: 'auto', backgroundColor: "#A8A4D9"
  };//сделать норм бегунок

  return (
    <Box borderRadius={5} width={"245px"} height={"414px"}
      sx={BoxStyle} >
      <Button margin={"auto"} onClick={function () { getAutoUserPosition(dispatch); dispatch(setCity(null)); setLoc(false) }}>
        <Typography color={"white"} border="1px grey solid" borderRadius={5} padding={'1%'} fontSize={14}>Define automatically</Typography>
      </Button>
      <CountriesList dispatch={dispatch} setLoc={setLoc}></CountriesList>
    </Box >
  );
}