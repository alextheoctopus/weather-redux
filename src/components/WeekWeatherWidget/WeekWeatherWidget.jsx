import React from "react";
import { Box, Typography, Stack, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { createTheme } from '@mui/material/styles';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const theme = createTheme();

theme.typography.h2 = {
    fontWeight: 'light',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
};

export const WeekWeatherWidget = () => {
    const fiveDaysForecastRedux = useSelector(state => state.fiveDaysForecast)

    let boxStyle = {
        backgroundColor: "rgba(249, 241, 250, 0.51)",
        margin: "auto",
        marginTop: "3%",
        width: "80%",
        height: "350px",
        borderRadius: 5
    }

    return (
        <Stack direction="column">
            {fiveDaysForecastRedux.fiveDaysData.map((day, index) => {
                return <Box sx={boxStyle} key={index} padding={"auto"}>
                    <Typography>{day.day}</Typography>
                    <ResponsiveContainer width="90%" height="70%">
                        <LineChart
                            width={500}
                            height={380}
                            data={day}
                            margin={{
                                top: 10,
                                right: 0,
                                left:-25,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid vertical={true} strokeDasharray="3 3"></CartesianGrid>
                            <XAxis dataKey="hour" />
                            <YAxis/>
                            <Tooltip />
                            <Legend/>
                            <Line type="monotone" dataKey="temp" stroke="#84d89d" dot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            })}
        </Stack>
    )

}
/* {day.map((threeHour) => {
                        return (
                            <Stack direction="row">
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h2" margin={'auto'}>{threeHour.time}</Typography>
                                    <Typography variant="h2" margin={'auto'}>{threeHour.pop}</Typography>
                                    <Typography variant="h2" margin={'auto'}>{threeHour.minTemp}/{threeHour.maxTemp}°C</Typography>
                                </ThemeProvider>
                            </Stack>
                        )
                    })} */