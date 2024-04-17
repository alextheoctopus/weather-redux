import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import CurrentWeatherWidget from "../WeatherWidget/CurrentWeatherWidget";
import { WeekWeatherWidget } from "../WeekWeatherWidget/WeekWeatherWidget";
import { AppContext } from "../AppContext";
export const BodyForecast = () => {
    const currentForecast = useSelector(state => state.currentForecast);
    const fiveDaysForecast = useSelector(state => state.fiveDaysForecast);

    let { setShowForecast } = useContext(AppContext);
    currentForecast.curTemp && fiveDaysForecast.fiveDaysData && setShowForecast(true);
    return (<>{
        currentForecast.curTemp && fiveDaysForecast.fiveDaysData ?
            <Stack direction="column">
                <CurrentWeatherWidget></CurrentWeatherWidget>
                <WeekWeatherWidget></WeekWeatherWidget>
            </Stack > : <Typography>Loading...</Typography>}</>);
}