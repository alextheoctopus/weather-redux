import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentForecast = createAsyncThunk('fetchCurrentForecast', async (data) => {
    if (data.location.city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.location.city}&appid=${data.ApiKey}`);
        // const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    } if (data.location.latitude) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=${data.ApiKey}`);
        // const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    }//TODO: Разделить между собой запросыи загрузку и сделать проверку на отображение данных 5 дней
});

export const currentForecast = createSlice({
    name: "currentForecast",
    initialState: {
        data: null || JSON.parse(localStorage.getItem('data')),
        loading: false,
        error: '',
        curTemp: null || localStorage.getItem('curTemp'),
        feelsLike: null || localStorage.getItem('feelsLikeTemp'),
        precipitations: null || JSON.parse(localStorage.getItem('precipitations')),
        sunrise: null || localStorage.getItem('sunrise'),
        sunset: null || localStorage.getItem('sunset'),
        pressure: null || localStorage.getItem('pressure'),
        humidity: null || localStorage.getItem('humidity'),
        wind: null || localStorage.getItem('wind'),
        direction: null || localStorage.getItem('direction'),
        visibility: null || localStorage.getItem('visibility')
    },
    reducers: {
        updateData: (state) => {
            Math.round(state.data.main.temp - 273) >= 0 ?
                state.curTemp = "+" + Math.round(state.data.main.temp - 273) :
                state.curTemp = Math.round(state.data.main.temp - 273);
            Math.round(state.data.main.feels_like - 273) >= 0 ?
                state.feelsLike = "+" + Math.round(state.data.main.feels_like - 273) :
                state.feelsLike = Math.round(state.data.main.feels_like - 273)
            state.precipitations = [];
            state.data.weather.forEach((condition) => state.precipitations.push(condition));//состояние на данный момент
            var date = new Date(state.data.sys.sunset * 1000)
            var hours = date.getHours()
            var minutes = "0" + date.getMinutes()
            state.sunset = hours + ':' + minutes.substr(-2);
            var date_sunrise = new Date(state.data.sys.sunrise * 1000)
            var hours_sunrise = date_sunrise.getHours() 
            var minutes_sunrise = "0" + date_sunrise.getMinutes()
            state.sunrise = hours_sunrise + ':' + minutes_sunrise.substr(-2);
            state.pressure = -263 + state.data.main.pressure + "mm of mercury";
            state.humidity = state.data.main.humidity + "%";
            state.wind = state.data.wind.speed;
            state.visibility = state.data.visibility + "m";
            let deg = state.data.wind.deg;
            if (deg >= 0 && deg < 45) {
                state.direction = "North";
            } else if (deg >= 45 && deg < 90) {
                state.direction = "North-East";
            } else if (deg >= 90 && deg < 135) {
                state.direction = "East";
            } else if (deg >= 135 && deg < 180) {
                state.direction = "South-East";
            } else if (deg >= 180 && deg < 225) {
                state.direction = "South";
            } else if (deg >= 225 && deg < 270) {
                state.direction = "South-West";
            } else if (deg >= 270 && deg < 315) {
                state.direction = "West";
            } else if (deg >= 315 && deg < 360) {
                state.direction = "North-West";
            } else if (deg === 0 || deg === 360) {
                state.direction = "North";
            }
            localStorage.setItem('direction', state.direction);
            localStorage.setItem('visibility', state.visibility);
            localStorage.setItem('humidity', state.humidity);
            localStorage.setItem('wind', state.wind);
            localStorage.setItem('pressure', state.pressure);

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
                localStorage.setItem('data', JSON.stringify(state.data));
                currentForecast.caseReducers.updateData(state, action);
                //добавить обновление времени
            })
            .addCase(fetchCurrentForecast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export const { getDate, updateData } = currentForecast.actions;
export default currentForecast.reducer;