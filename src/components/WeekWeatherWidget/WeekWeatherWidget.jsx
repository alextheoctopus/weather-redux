import React from "react";
import { Box, Typography, Stack, ThemeProvider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createTheme } from '@mui/material/styles';
import { updateData5 } from "../../store/features/fiveDaysForecast";
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
        height: "260px",
        borderRadius: 5
    }

    return (
        <Stack direction="column">
            {fiveDaysForecastRedux.fiveDaysData.map((day, index) => {
                return <Box sx={boxStyle} key={index} padding={"auto"}>
                    <Typography>{day.day}</Typography>
                    <ResponsiveContainer width="97%" height="100%">
                        <LineChart
                            width={"100%"}
                            height={"100%"}
                            data={day}
                            margin={{
                                top: 10,
                                right: 0,
                                left: -25,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid vertical={true} strokeDasharray="1 1"></CartesianGrid>
                            <XAxis dataKey="hour" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="temperature" stroke="#84d89d" dot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            })}
        </Stack>
    )

}