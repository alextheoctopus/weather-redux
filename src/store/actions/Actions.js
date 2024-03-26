import { fetchCurrentForecast } from "../features/currentForecast";
import { fetchFiveDaysForecast } from "../features/fiveDaysForecast";
import { getCities, fetchLocation } from "../features/location";
// export const getCurrentForecast = (dispatch, city, country, ApiKey) => {
//     dispatch(fetchCurrentForecast({ city: city, country: country, ApiKey: ApiKey }));
// }
export const getCurrentForecast = (dispatch, location, ApiKey) => {
    dispatch(fetchCurrentForecast({ location: location, ApiKey: ApiKey }));
    //вызов получается такой  
    //getCurrentForecast({latitude:dataReduxLocation.latitude, longitude:dataReduxLocation.longitude},
    //dataCurrentForecast.ApiKey);
    // или если город и страна
    //getCurrentForecast({city:dataReduxLocation.city,country: dataReduxLocation.country},
    //dataCurrentForecast.ApiKey);ApiKey будем хранить в currentForecast
}
// export const getFiveDaysForecast = (dispatch, city, country, ApiKey) => {
//     dispatch(fetchFiveDaysForecast({ city: city, country: country, ApiKey: ApiKey }));
// }
export const getFiveDaysForecast = (dispatch, location, ApiKey) => {
    dispatch(fetchFiveDaysForecast({ location: location, ApiKey: ApiKey }));
    //вызов получается такой  
    //getFiveDaysForecast({latitude:dataReduxLocation.latitude, longitude:dataReduxLocation.longitude},
    //dataFiveDaysForecast.ApiKey);
    // или если город и страна
    //getFiveDaysForecast({city:dataReduxLocation.city,country: dataReduxLocation.country},
    //dataFiveDaysForecast.ApiKey); ApiKey будем хранить в fiveDaysForecast
}
export const getCitiesRedux = (dispatch, country) => {
    dispatch(getCities(country));
}

export const getAutoUserPosition = (dispatch, reduxLocation) => {
    dispatch(fetchLocation());
}