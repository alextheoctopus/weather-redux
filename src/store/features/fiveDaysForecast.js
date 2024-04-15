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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=56.8623&lon=53.2643&appid=${data.ApiKey}`);
        // const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    }
})

export const fiveDaysForecast = createSlice({
    name: "fiveDaysForecast",
    initialState: {
        data: null,
        loading: false,
        fiveDaysData: JSON.parse(localStorage.getItem("5daysWeather")) || {},
        error: null,
        dataList: null,
    },
    reducers: {
        updateData5: (state) => {
            console.log("updateData5", state.data);
            state.fiveDaysData = []
            if (state.error === null && state.loading === false) {
                let localStorageList = [];
                state.data.list.forEach((timestamp) => {
                    let params = {
                        temperature: null,
                        precipitations: [],
                        probabilityOfPerc: null,
                        day: null,
                        hour: null,
                        pop: null
                    };
                    Math.round(timestamp.main.temp - 273) >= 0 ?
                        params.temperature = "+" + Math.round(timestamp.main.temp - 273) :
                        params.temperature = Math.round(timestamp.main.temp - 273)
                    params.pop = timestamp.pop * 100 + "% ";
                    timestamp.weather.forEach((condition) => params.precipitations.push(condition));//состояние на данный момент
                    params.day = timestamp.dt_txt.slice(0, 10);
                    params.hour = timestamp.dt_txt.slice(11, 13);
                    localStorageList.push(params);
                });

                for (let i = 0; i < localStorageList.length; i += 8) {
                    state.fiveDaysData.push(localStorageList.slice(i, i + 8));
                }
                console.log("updateData5", state.fiveDaysData);

                localStorage.setItem('5daysWeather', JSON.stringify(state.fiveDaysData));
            }
        }
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
                console.log(action.payload, "jdjd");
                // fiveDaysForecast.caseReducers.test(state,action);

                fiveDaysForecast.caseReducers.updateData5(state,action);
            })
            .addCase(fetchFiveDaysForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export const { updateData5 } = fiveDaysForecast.actions;
export default fiveDaysForecast.reducer;
