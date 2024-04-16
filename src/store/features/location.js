import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import countries from '../../assets/countriesList/countries.json';

export const fetchLocation = createAsyncThunk('location/fetchLocation', async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                reject(error);
            }
        );
    })
});

export const location = createSlice({
    name: "location",
    initialState: {
        location: {
            latitude: null || localStorage.getItem("latitude"),
            longitude: null || localStorage.getItem("longitude"),
            city: null || localStorage.getItem("city"),
        },
        loading: false,
        error: null,
        countries: countries.countries,
        cities: null,
        country: null
    },
    reducers: {
        getCities: (state, action) => {
            let city = state.countries[action.payload];
            state.cities = city;
            console.log("city", JSON.stringify(state.cities));
        },
        setCountry: (state, action) => {
            state.country = action.payload
        },
        setCity: (state, action) => {
            localStorage.removeItem('latitude');
            localStorage.removeItem('longitude');
            localStorage.setItem('city', action.payload);
            state.location.city = action.payload;
        },
        setCities: (state, action) => {
            state.cities = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLocation.fulfilled, (state, action) => {
                state.loading = false;
                state.location.latitude = action.payload.latitude;//после точки оставить 4 символа
                state.location.longitude = action.payload.longitude;

                localStorage.removeItem('city');
                localStorage.setItem('longitude', action.payload.longitude);
                localStorage.setItem('latitude', action.payload.latitude);
            })
            .addCase(fetchLocation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { getCities, setCountry, setCity, setCities, setCoords } = location.actions;
export default location.reducer;