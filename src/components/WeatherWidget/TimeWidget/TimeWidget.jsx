import { getDate } from "../../../store/features/time"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
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
        <Stack direction="column" margin="auto">
            <Typography fontSize={19} marginTop={"15%"} color="#343434">{timeRedux.month} {timeRedux.day},<br /> {timeRedux.weekDay}</Typography>
            <Typography fontSize={19} marginTop={"15%"} color="#343434">{time}</Typography>
        </Stack>
    )
}