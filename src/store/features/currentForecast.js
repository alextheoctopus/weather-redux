import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentForecast = createAsyncThunk('fetchCurrentForecast', async (data) => {
    if (data.location.city) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${data.ApiKey}`);
        const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    } if (data.location.latitude) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${data.ApiKey}`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55.8623&lon=53.2643&appid=${data.ApiKey}`);

        return response.json();
    }
});

export const currentForecast = createSlice({
    name: "currentForecast",
    initialState: {
        data: {},
        loading: false,
        error: '',
        curTemp: null || localStorage.getItem('curTemp'),
        feelsLike: null || localStorage.getItem('feelsLikeTemp'),
        precipitations: null || JSON.parse(localStorage.getItem('precipitations')),
        sunrise: null || localStorage.getItem('sunrise'),
        sunset: null || localStorage.getItem('sunset'),
    },
    reducers: {
        updateData: (state) => {
            console.log('updateData', state.data);
            Math.round(state.data.main.temp - 273) >= 0 ?
                state.curTemp = "+" + Math.round(state.data.main.temp - 273) :
                state.curTemp = Math.round(state.data.main.temp - 273);
            Math.round(state.data.main.feels_like - 273) >= 0 ?
                state.feelsLike = "+" + Math.round(state.data.main.feels_like - 273) :
                state.feelsLike = Math.round(state.data.main.feels_like - 273)
            state.precipitations = [];
            state.data.weather.forEach((condition) => state.precipitations.push(condition));//состояние на данный момент
            state.sunset = Date(state.data.sys.sunset).slice(16,21);
            state.sunrise = Date(state.data.sys.sunrise).slice(16,21);
            localStorage.setItem('sunrise', state.sunrise);
            localStorage.setItem('sunset', state.sunset);
            
            localStorage.setItem('curTemp', state.curTemp);
            localStorage.setItem('feelsLikeTemp', state.feelsLike);
            localStorage.setItem('precipitations', JSON.stringify(state.precipitations));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentForecast.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentForecast.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                currentForecast.caseReducers.updateData(state, action);
            })
            .addCase(fetchCurrentForecast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export const { getDate, updateData } = currentForecast.actions;
export default currentForecast.reducer;