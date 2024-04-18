import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import { getCurrentForecast, getFiveDaysForecast } from "../../store/actions/Actions";
import { AppContext } from "../AppContext";
import { BodyForecast } from "../BodyForecast/BodyForecast";
export const FetchForecast = () => {
    let { dispatch } = useContext(AppContext);
    const locationRedux = useSelector(state => state.location);

    const currentForecast = useSelector(state => state.currentForecast);
    const fiveDaysForecast = useSelector(state => state.fiveDaysForecast);
    return (<>
        {currentForecast.curTemp && fiveDaysForecast.fiveDaysData ?
            <BodyForecast></BodyForecast> :
            <Box height={window.innerHeight}>
                <Button margin={"auto"} sx={{ marginTop: "30%" }} onClick={function () {
                    getCurrentForecast(dispatch, locationRedux.location, "a7eacf07c5e59d8777193b9d8e440c46");
                    getFiveDaysForecast(dispatch, locationRedux.location, "a7eacf07c5e59d8777193b9d8e440c46");
                }}>
                    <Typography fontSize={22} fontWeight={'medium'} color={"#3E3EB0"}>Get a forecast</Typography>
                </Button>
            </Box>}
    </>)
}