import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentForecast from "./features/currentForecast";
import fiveDaysForecast from "./features/fiveDaysForecast";
import location from "./features/location";
import time from "./features/time";
const rootReducer = combineReducers({
    currentForecast: currentForecast,
    fiveDaysForecast: fiveDaysForecast,
    location: location,
    time:time,
});
export const store = configureStore({
    reducer: rootReducer,
});
