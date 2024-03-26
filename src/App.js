import { Grid, Stack } from "@mui/material";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { getAutoUserPosition, getCurrentForecast, getFiveDaysForecast } from "./store/actions/Actions";
import { WindowLoc } from "./components/location/windowLocation/windowLoc";
import { Logo } from './components/logo/logo';
import { LocationPlace } from './components/location/LocationPlace';
import { useState } from "react";
import { AppContext } from "./components/AppContext";
import CurrentWeatherWidget from "./components/WeatherWidget/CurrentWeatherWidget";
let AppStyle = {
  textAlign: "center",
  width: "360px",
  height: "1225px",
  background: "linear-gradient(#3E3EB0,#b5b5c552 , #D9D9D9)",
  marginLeft: "auto",
  marginRight: "auto"
}
const AppRedux = () => {
  const dispatch = useDispatch();
  // getCurrentForecast(dispatch, { city: "izhevsk", country: "Russia" }, "fbwfhjfwb");//вызывать по нажатию на кнопку или обновление местоположения?
  // getFiveDaysForecast(dispatch, { latitude: "55", longitude: "59" }, "nnoenornorno")
  return (
    <div style={AppStyle}>
      <MainApp dispatch={dispatch}></MainApp>
    </div>
  )
}
const MainApp = ({ dispatch }) => {
  const [loc, setLoc] = useState(false);
  return (
    <AppContext.Provider value={{ loc, setLoc }}>
      <Grid container>
        {loc && <WindowLoc dispatch={dispatch}></WindowLoc>}
        <Stack container>
          <Stack direction="row">
            <Logo />
            <LocationPlace></LocationPlace>
          </Stack>
        </Stack >
        <CurrentWeatherWidget></CurrentWeatherWidget>
      </Grid>
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