import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentForecast from "./features/currentForecast";
import fiveDaysForecast from "./features/fiveDaysForecast";
import location from "./features/location";
import time from "./features/time";
import airPolution from "./features/airPolution";
const rootReducer = combineReducers({
    currentForecast: currentForecast,
    fiveDaysForecast: fiveDaysForecast,
    airPolution: airPolution,
    location: location,
    time: time,
});
export const store = configureStore({
    reducer: rootReducer,
});
