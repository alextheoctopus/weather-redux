import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFiveDaysForecast = createAsyncThunk('fetchFiveDaysForecast', async (data) => {
    if (data.location.city) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.city},${data.country}&appid=${data.ApiKey}`);
        console.log("fivedays", data.location.city + data.location.country);
        const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    } if (data.location.latitude) {
        console.log("latitude");
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${data.ApiKey}`);
        // return response.json();
    }
})

export const fiveDaysForecast = createSlice({
    name: "fiveDaysForecast",
    initialState: {
        data: [{}] || localStorage.getItem('fiveDaysForecast'),
        loading: false,
        error: '',
        day: null,
        weekDay: null,
        month: null,
        time: null,
        lastFecthedTime: null || localStorage.getItem('lastTimeFiveDaysForecast'),
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
                localStorage.setItem('lastTimeFiveDaysForecast', day + " " + month + " " + time);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiveDaysForecast.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFiveDaysForecast.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                localStorage.setItem('fiveDaysForecast', JSON.stringify(action.payload));
            })
            .addCase(fetchFiveDaysForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export default fiveDaysForecast.reducer;