import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchForecast = createAsyncThunk('fetchForecast', async (data) => {
    if (data.city) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${data.ApiKey}`);
        console.log(data.city + data.country + data.ApiKey);
        const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    } if (data.latitude) {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${data.ApiKey}`);
        // return response.json();
    }
})

export const forecast = createSlice({
    name: "currentForecast",
    initialState: {
        data: [{}] || localStorage.getItem('forecast'),
        loading: false,
        error: '',
        day: null,
        weekDay: null,
        month: null,
        time: null,
        lastFecthedTime: null || localStorage.getItem('lastFecthedTime'),
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

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                localStorage.setItem('forecast', JSON.stringify(action.payload));
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export default forecast.reducer;