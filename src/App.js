import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { WindowLoc } from "./components/location/windowLocation/windowLoc";
import { Logo } from './components/logo/logo';
import { LocationPlace } from './components/location/LocationPlace';
import { useState } from "react";
import { AppContext } from "./components/AppContext";
import { BodyForecast } from "./components/BodyForecast/BodyForecast";
import { FetchForecast } from "./components/fetchForecast/FetchForecast";
let AppStyle = {
  textAlign: "center",
  background: "linear-gradient(#3E3EB0,#b5b5c552 , #D9D9D9)",
  marginLeft: "auto",
  marginRight: "auto"
}
const AppRedux = () => {
  const dispatch = useDispatch();
  return (
    <div style={AppStyle}>
      <MainApp dispatch={dispatch}></MainApp>
    </div>
  )
}
const MainApp = ({ dispatch }) => {
  const [loc, setLoc] = useState(false);
  const locationRedux = useSelector(state => state.location);
  const [showForecast, setShowForecast] = useState(localStorage.getItem("havingForecast"));
  return (
    <AppContext.Provider value={{ loc, setLoc, setShowForecast, dispatch }}>
      {!navigator.onLine && <Typography color={"#212121"}>You are in offline mode</Typography>}
      {loc && <WindowLoc dispatch={dispatch}></WindowLoc>}
      <Stack container>
        <Stack direction="row">
          <Logo />
          <LocationPlace></LocationPlace>
        </Stack>
      </Stack >
      {locationRedux.location.latitude || locationRedux.location.city ?
        <FetchForecast></FetchForecast>
        : <Typography fontSize={25} color={"white"}> To display the weather, please select a location </Typography>}
    </AppContext.Provider >
  );
}

export const App = () => {
  return (
    <Provider store={store}>
      <AppRedux></AppRedux>
    </Provider>
  );
}