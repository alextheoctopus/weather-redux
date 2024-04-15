import { fetchCurrentForecast, updateData, updateLastFetched } from "../features/currentForecast";
import { fetchFiveDaysForecast, updateData5 } from "../features/fiveDaysForecast";
import { getCities, fetchLocation } from "../features/location";
import { getDate } from "../features/time";

export const getCurrentForecast = (dispatch, location, ApiKey) => {
    dispatch(fetchCurrentForecast({ location: location, ApiKey: ApiKey }));
    dispatch(getDate('lastFetchedTimeCurrent'));
}
export const getFiveDaysForecast = (dispatch, location, ApiKey) => {
    dispatch(fetchFiveDaysForecast({ location: location, ApiKey: ApiKey }));
    dispatch(getDate('lastFetchedTimeFive'));
}
export const getCitiesRedux = (dispatch, country) => {
    dispatch(getCities(country));
}

export const getAutoUserPosition = (dispatch, reduxLocation) => {
    dispatch(fetchLocation());
}