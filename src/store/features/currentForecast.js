import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentForecast = createAsyncThunk('fetchCurrentForecast', async (data) => {
    if (data.location.city) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${data.ApiKey}`);
        console.log(data.location.city + data.location.country + data.ApiKey);
        const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    } if (data.location.latitude) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${data.ApiKey}`);
        // return response.json();
    }
});

export const currentForecast = createSlice({
    name: "currentForecast",
    initialState: {
        data: {
            "weather": [
                {
                    "main": "Rain"
                },
                {
                    "main": "Snow"
                }
            ],
            "main": {
                "temp": 277,
                "feels_like": 274,
                "temp_min": 275,
                "temp_max": 279,
                "pressure": 1008,
                "humidity": 69
            },
            "pop": 1,
            "visibility": 10000,//видимость в метрах
            "wind": {
                "speed": 0.62,
                "deg": 349,
                "gust": 1.18
            },
            "rain": {
                "1h": 3.16//объем осадков за последний час в миллиметрах
            },
            "snow": {
                "1h": 0
            },
            "clouds": {
                "all": 100 //процент облачности
            },
        },
        loading: false,
        error: '',
        curTemp: null || localStorage.getItem('curTemp'),
        maxTemp: null || localStorage.getItem('maxTemp'),
        minTemp: null || localStorage.getItem('minTemp'),
        precipitations: null || JSON.parse(localStorage.getItem('precipitations')),
        pop: 0 || localStorage.getItem('probability'),
        // ApiKey: "b6907d289e10d714a6e88b30761fae25",
    },
    reducers: {
        updateData: (state) => {
            Math.round(state.data.main.temp - 273) >= 0 ?
                state.curTemp = "+" + Math.round(state.data.main.temp - 273) :
                state.curTemp = Math.round(state.data.main.temp - 273);
            Math.round(state.data.main.temp_max - 273) >= 0 ?
                state.maxTemp = "+" + Math.round(state.data.main.temp_max - 273) :
                state.maxTemp = Math.round(state.data.main.temp_max - 273)
            Math.round(state.data.main.temp_min - 273) >= 0 ?
                state.minTemp = "+" + Math.round(state.data.main.temp_min - 273) :
                state.minTemp = Math.round(state.data.main.temp_min - 273)
            state.precipitations=[];
            state.data.weather.forEach((condition) => state.precipitations.push(condition));//состояние на данный момент
            localStorage.setItem('curTemp', state.curTemp);
            localStorage.setItem('maxTemp', state.maxTemp);
            localStorage.setItem('minTemp', state.minTemp);
            localStorage.setItem('precipitations', JSON.stringify(state.precipitations));
            state.pop = state.data.pop * 100 + "%";
            localStorage.setItem('probability', state.data.pop * 100 + "%");
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
                // state.data = action.payload; //раскомментировать для отчёта
            })
            .addCase(fetchCurrentForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export const { getDate, updateData } = currentForecast.actions;
export default currentForecast.reducer;