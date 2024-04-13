import { Stack, Typography } from "@mui/material";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { WindowLoc } from "./components/location/windowLocation/windowLoc";
import { Logo } from './components/logo/logo';
import { LocationPlace } from './components/location/LocationPlace';
import { useState } from "react";
import { AppContext } from "./components/AppContext";
import CurrentWeatherWidget from "./components/WeatherWidget/CurrentWeatherWidget";
import { UpdateHandler } from "./components/updateHandler/UpdateHandler";
import { WeekWeatherWidget } from "./components/WeekWeatherWidget/WeekWeatherWidget";
let AppStyle = {
  textAlign: "center",
  // width: "100%",
  // height: "1225px",
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

  return (
    <AppContext.Provider value={{ loc, setLoc }}>
      {!navigator.onLine && <Typography color={"#212121"}>You are in offline mode</Typography>}
      {loc && <WindowLoc dispatch={dispatch}></WindowLoc>}
      <Stack container>
        <Stack direction="row">
          <Logo />
          <LocationPlace></LocationPlace>
        </Stack>
      </Stack >
      {locationRedux.location.latitude || locationRedux.location.city ? <Stack direction="column">
        <CurrentWeatherWidget></CurrentWeatherWidget>
        <UpdateHandler type='FiveDays'></UpdateHandler>
        <WeekWeatherWidget></WeekWeatherWidget>
      </Stack > : <Typography fontSize={25} color={"white"}> To display the weather, please select a location </Typography>}
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