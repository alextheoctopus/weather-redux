import React from "react";
import { Box, Typography, Stack, ThemeProvider, Button } from "@mui/material";
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
    const dispatch = useDispatch();
    const fiveDaysForecastRedux = useSelector(state => state.fiveDaysForecast)
    let boxStyle = {
        backgroundColor: "rgba(249, 241, 250, 0.51)",
        margin: "auto",
        marginTop: "3%",
        width: "80%",
        height: "300px",
        borderRadius: 5
    }
    console.log(fiveDaysForecastRedux.fiveDaysData)

    return (
        <Stack direction="column">
            <Button sx={{ height: "100px" }} onClick={() => dispatch(updateData5())} ></Button>
            {fiveDaysForecastRedux.fiveDaysData.map((day, index) => {
                console.log("day: ",day[index].min);
                return (
                    <Box sx={boxStyle} key={index} padding={"auto"}>
                        <ResponsiveContainer width="97%" height="91%">
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
                                <CartesianGrid vertical={true} strokeDasharray="0.5 0.5"></CartesianGrid>
                                <XAxis dataKey="hour" strokeWidth={1} />
                                <YAxis domain={[day[index].min, day[index].max]} includeHidden />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temperature" stroke="#84d89d" dot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>)
            })}
        </Stack>
    )

}