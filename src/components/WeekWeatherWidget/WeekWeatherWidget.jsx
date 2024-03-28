import React from "react";

import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
export const WeekWeatherWidget = () => {
    const fiveDaysForecastRedux = useSelector(state => state.fiveDaysForecast)

    let boxStyle = {
        backgroundColor: "rgba(249, 241, 250, 0.51)",
        margin: "auto",
        marginTop: "3%",
        width: "92%",
        height: "50px",
        borderRadius: 5
    }
    console.log(fiveDaysForecastRedux.dataList[0])
    return (
        <Stack direction="column">
            {fiveDaysForecastRedux.dataList.map((day) => {
                return day.map((threeHour, index) => {
                    return (<Box sx={boxStyle} key={index} padding={"auto"}>
                        <Stack direction="row">
                            <Typography fontSize={14} color={"salmon"} marginLeft={"3%"} marginTop={"1%"}>{threeHour.time}</Typography>
                            <Typography fontSize={14} color={"salmon"} marginTop={"0.3%"} position="absolute" left={"49%"}>{threeHour.pop}</Typography>
                            <Typography fontSize={14} color={"salmon"} marginTop={"0.3%"} position="absolute" left={"57%"}>{threeHour.minTemp}/{threeHour.maxTemp}°C</Typography>
                        </Stack>
                    </Box>)
                })
            })}
        </Stack>
    )

}