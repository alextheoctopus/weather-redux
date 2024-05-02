import React from 'react';
import { Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Box, Typography, Stack, ThemeProvider, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createTheme } from '@mui/material/styles';
import { updateData5 } from "../../store/features/fiveDaysForecast";
import { UpdateHandler } from '../updateHandler/UpdateHandler';


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

const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload) {
        return (
            <Typography >
                {payload[0].payload.day}<br/>
                Temp: {payload[0].payload.temperature}°С
            </Typography>
        );
    }

    return null;
};
export const WeekWeatherWidget = () => {
    const fiveDaysForecastRedux = useSelector(state => state.fiveDaysForecast)
    let boxStyle = {
        backgroundColor: "#EEEDED",
        margin: "auto",
        marginTop: "3%",
        width: "80%",
        height: "300px",
        borderRadius: 5,
        border:"1 px rgba(154, 255, 105, 1)"
    }

    return (
        <Stack direction="column">
            <UpdateHandler type='FiveDays'></UpdateHandler>
            {fiveDaysForecastRedux.fiveDaysData.map((day, index) => {
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
                                <Tooltip content={<CustomTooltip />} />
                                <Legend stroke='rgba(255, 164, 57, 1)'/>
                                <Line type="monotone" dataKey="temperature" stroke="#0E3E6E" strokeWidth={2} dot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer> 
                    </Box>)
            })}
        </Stack>
    )
}