import { fetchAirPolution } from "../features/airPolution";
import { fetchCurrentForecast } from "../features/currentForecast";
import { fetchFiveDaysForecast } from "../features/fiveDaysForecast";
import { getCities, fetchLocation } from "../features/location";
import { getDate } from "../features/time";
export const getAirPolution = (dispatch, location, ApiKey) => {
    dispatch(fetchAirPolution({ location: location, ApiKey: ApiKey }));
}
export const getCurrentForecast = (dispatch, location, ApiKey) => {
    dispatch(fetchCurrentForecast({ location: location, ApiKey: ApiKey }));
    getAirPolution(dispatch, location, ApiKey);
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
    //может быть сюда засунуть вызов функций?
}