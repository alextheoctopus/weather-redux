import { getDate } from "../../../store/features/time"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const theme = createTheme();

theme.typography.h3 = {
    fontWeight: 'light',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',
    },
};
export const TimeWidget = ({ currentWeatherRedux }) => {
    let currentDate = new Date();
    let currentTime = currentDate.toString();
    let startTime = currentTime.slice(15, 21);
    const timeRedux = useSelector(state => state.time);
    const dispatch = useDispatch();
    dispatch(getDate('currentTime'));
    const [time, setTime] = useState(startTime);
    useEffect(() => {
        const timer = setInterval(() => {
            let currentDate = new Date();
            let currentTime = currentDate.toString();
            setTime(currentTime.slice(15, 21));
        }, 1000);

        return () => {
            clearInterval(timer); // очистка таймера при размонтировании компонента
        };
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Stack direction="column" margin="auto" >
                <Typography variant="h3" fontSize={19} color="#343434">{timeRedux.month} {timeRedux.day},<br /> {timeRedux.weekDay}</Typography>
                <Typography variant="h3" fontSize={19} color="#343434" fontWeight={'light'}>{time}</Typography>
            </Stack>
        </ThemeProvider>
    )
}