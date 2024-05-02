import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import RestartAlt from '@mui/icons-material/RestartAlt';
import { getCurrentForecast, getFiveDaysForecast } from "../../store/actions/Actions";
export const UpdateHandler = ({ type, selector }) => {
    const dispatch = useDispatch();
    const locationRedux = useSelector(state => state.location);
    const timeRedux = useSelector(state => state.time);
    const updateHandlerCurrent = () => {
        getCurrentForecast(dispatch, locationRedux.location, "a7eacf07c5e59d8777193b9d8e440c46");
    }
    const updateHandlerFiveDays = () => {
        getFiveDaysForecast(dispatch, locationRedux.location, "a7eacf07c5e59d8777193b9d8e440c46");
    }
    return (
        <>
            {type === "Current" ?
                <Button variant={'contained'} sx={{marginTop:"2%"}} onClick={updateHandlerCurrent}>
                    <RestartAlt htmlColor="#EEEDED"></RestartAlt>
                    <Typography fontWeight={"Bold"} color={"#EEEDED"}>Last update was:{timeRedux.lastFetchedCurrent}</Typography>
                </Button> :
                <Button variant={'contained'} sx={{marginTop:"2%"}} onClick={updateHandlerFiveDays}>
                    <RestartAlt htmlColor="#EEEDED"></RestartAlt>
                    <Typography fontWeight={"Bold"} color={"#EEEDED"}>Last update was:{timeRedux.lastFetchedFive}</Typography>
                </Button>}
        </>
    )
}