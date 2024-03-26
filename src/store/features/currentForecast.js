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
                    "id": 501,
                    "main": "Rain"
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
        } || localStorage.getItem('currentForecast'),
        loading: false,
        error: '',
        day: null,
        weekDay: null,
        month: null,
        time: null,
        curTemp: null,
        maxTemp: null,
        minTemp: null,
        percipitations: [],
        lastFecthedTime: null || localStorage.getItem('lastFecthedTime'),
        ApiKey: "fineg5236gernjeongre",
    },
    reducers: {
        getDate: (state, action) => {
            let currentDate = new Date();
            if (action.payload === 'currentTime') {//частота вызова функции каждая минута=> вынести в отдельный виджет Время
                state.month = currentDate.toLocaleString('en-us', { month: 'long' });
                state.day = currentDate.getDate();
                let days = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ];

                let n = currentDate.getDay();
                let currentTime = currentDate.toString();
                state.time = currentTime.slice(15, 21);
                state.weekDay = days[n];
            } else if (action.payload === 'lastFetchedTime') {//вызвать при загрузке данных
                let currentDate = new Date();
                let month = currentDate.toLocaleString('en-us', { month: 'long' });
                let day = currentDate.getDate();
                let currentTime = currentDate.toString();
                let time = currentTime.slice(15, 21);
                state.lastFecthedTime = day + " " + month + " " + time;
                localStorage.setItem('lastFecthedTime', day + " " + month + " " + time);
            }
        },
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
            state.data.weather.forEach((condition) => state.percipitations.push(condition));//состояние на данный момент
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
                // localStorage.setItem('currentForecast', JSON.stringify(action.payload));
                localStorage.setItem('currentForecast', JSON.stringify(state.data));
            })
            .addCase(fetchCurrentForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export default currentForecast.reducer;