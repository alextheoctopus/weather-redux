import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import CurrentWeatherWidget from "../WeatherWidget/CurrentWeatherWidget";
import { WeekWeatherWidget } from "../WeekWeatherWidget/WeekWeatherWidget";
import { ParameterWidget } from "../OtherParameters/ParameterWidget";
export const BodyForecast = () => {
    const currentForecast = useSelector(state => state.currentForecast);
    const fiveDaysForecast = useSelector(state => state.fiveDaysForecast);
    return (<>{
        currentForecast.curTemp && fiveDaysForecast.fiveDaysData ?
            <Stack direction="column" >
                <CurrentWeatherWidget></CurrentWeatherWidget>
                <Stack direction="row" justifyContent="center" spacing={3} marginTop={"5%"}>
                    <ParameterWidget width={"37.5%"} name={"AQI"}></ParameterWidget>
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={3} marginTop={"5%"}>
                    <ParameterWidget width={"37.5%"} name={"Humidity"}></ParameterWidget>
                    <ParameterWidget width={"37.5%"} name={"Pressure"}></ParameterWidget>
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={3} marginTop={"5%"}>
                    <ParameterWidget name={"Wind"} width={"37.5%"}></ParameterWidget>
                    <ParameterWidget name={"Visibility"} width={"37.5%"}></ParameterWidget>
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={3} marginTop={"5%"}>
                    <ParameterWidget name={"Sunrise"} width={"37.5%"}></ParameterWidget>
                    <ParameterWidget name={"Sunset"} width={"37.5%"}></ParameterWidget>
                </Stack>
                <WeekWeatherWidget></WeekWeatherWidget>
            </Stack > : <Typography>Loading...</Typography>}</>);
}