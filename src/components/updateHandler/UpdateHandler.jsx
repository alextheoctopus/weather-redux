import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { getCurrentForecast, getFiveDaysForecast } from "../../store/actions/Actions";
export const UpdateHandler = ({ type, selector }) => {
    const dispatch = useDispatch();
    const locationRedux = useSelector(state => state.location);
    const timeRedux = useSelector(state => state.time);
    const currentForecastRedux = useSelector(state => state.currentForecast);
    const fiveDaysForecastRedux = useSelector(state => state.fiveDaysForecast);
    
    const updateHandlerCurrent = () => {
        getCurrentForecast(dispatch, locationRedux.location, currentForecastRedux.ApiKey);
    }
    const updateHandlerFiveDays = () => {
        getFiveDaysForecast(dispatch, locationRedux.location, fiveDaysForecastRedux.ApiKey);
    }
    // к кнопкам написать Дата последнего обновления текущей погоды: currentForeacstRedux.lastFetchedTime
    return (
        <>
            {type === "Current" ?
                <Button onClick={updateHandlerCurrent}>
                    <RestartAltIcon></RestartAltIcon>
                    <Typography>Last update was:{timeRedux.lastFetchedCurrent}</Typography>
                </Button> :
                <Button onClick={updateHandlerFiveDays}>
                    <RestartAltIcon></RestartAltIcon>
                    <Typography>Last update was:{timeRedux.lastFetchedFive}</Typography>
                </Button>}
        </>
    )
}