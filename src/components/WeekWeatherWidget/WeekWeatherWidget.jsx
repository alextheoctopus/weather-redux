import React from 'react';
import { Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Box, Typography, Stack, ThemeProvider, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createTheme } from '@mui/material/styles';
import { updateData5 } from "../../store/features/fiveDaysForecast";
// const data = [
//     { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//     { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
// ];


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
                                <Legend />
                                <Line type="monotone" dataKey="temperature" stroke="#84d89d" dot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>)
            })}
        </Stack>
    )

}


// const CustomTooltipGraph = () => (
//     <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data}>
//             <Tooltip content={<CustomTooltip />} />
//             <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//             <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
//         </LineChart>
//     </ResponsiveContainer>
// );

// export default CustomTooltipGraph;