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
        data: null || JSON.parse(localStorage.getItem("data5")),
        loading: false,
        fiveDaysData: JSON.parse(localStorage.getItem("5daysWeather")) || {},
        error: null,
        dataList: null,
    },
    reducers: {
        updateData5: (state) => {
            console.log("updateData5", state.data);
            let tempRange = [];//массив всех температур для определения шкалы
            state.fiveDaysData = []
            if (state.error === null && state.loading === false) {
                let fiveDaysList = [];// массив 5 дней
                let localStorageList = [];// массив 5 дней обработанный


                let tempRange = [];// массив температур за день
                for (let i = 0; i < state.data.list.length; i += 8) {
                    fiveDaysList.push(state.data.list.slice(i, i + 8))
                }
                fiveDaysList.forEach((day, index) => {
                    let dayArray = [
                        //объекты каждые три часа и объект с минимальной и максимальной температурой
                    ];// массив данных 24 часов
                    day.forEach((threeHour) => {
                        let params = {
                            temperature: null,
                            day: null,
                            hour: null,
                        };
                        if (Math.round(threeHour.main.temp - 273) >= 0) {
                            params.temperature = "+" + Math.round(threeHour.main.temp - 273)
                            tempRange.push(parseInt(params.temperature));
                        } else {
                            params.temperature = Math.round(threeHour.main.temp - 273);
                            tempRange.push(parseInt(params.temperature));
                        }
                        params.day=fiveDaysForecast.caseReducers.updateDate(state, {payload:threeHour.dt_txt.slice(0, 10)});
                        params.hour = threeHour.dt_txt.slice(11, 13);
                        dayArray.push(params);
                        console.log(dayArray, index);
                    });
                    let min = tempRange.reduce((a, b) => {
                        return Math.min(a, b);
                    });
                    let max = tempRange.reduce((a, b) => {
                        return Math.max(a, b);
                    });
                    dayArray.forEach((timeStamp) => {
                        timeStamp.min = min;
                        timeStamp.max = max;
                    });

                    console.log(dayArray, index);
                    state.fiveDaysData.push(dayArray);
                });
                localStorage.setItem('5daysWeather', JSON.stringify(state.fiveDaysData));
            }
        },
        updateDate:(state,action)=>{
            console.log("action",action.payload)
            const dateStr = action.payload;
            const date = new Date(dateStr);

            const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const dayOfWeek = daysOfWeek[date.getDay()];
            const dayOfMonth = date.getDate();
const month = months[date.getMonth()];

const formattedDate = `${dayOfWeek} ${dayOfMonth} of ${month}`;
// console.log("formattedDate",formattedDate);
return formattedDate; 
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
                localStorage.setItem("data5", JSON.stringify(action.payload));
                fiveDaysForecast.caseReducers.updateData5(state, action);
            })
            .addCase(fetchFiveDaysForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export const { updateData5,updateDate } = fiveDaysForecast.actions;
export default fiveDaysForecast.reducer;
// state.data.list.forEach((timestamp, index) => {
                //     let params = {
                //         min: null,
                //         max: null,
                //         temperature: null,
                //         precipitations: [],
                //         probabilityOfPerc: null,
                //         day: null,
                //         hour: null,
                //     };
                //     if (Math.round(timestamp.main.temp - 273) >= 0) {
                //         params.temperature = "+" + Math.round(timestamp.main.temp - 273)
                //         tempRange.push(parseInt(params.temperature));
                //     } else {
                //         params.temperature = Math.round(timestamp.main.temp - 273);
                //         tempRange.push(parseInt(params.temperature));
                //     }
                //     // params.min = tempRange.reduce((a, b) => {
                //     return Math.min(a, b);
                // }); 
                // params.max = tempRange.reduce((a, b) => {
                //     return Math.max(a, b);
                // }); 
                //     timestamp.weather.forEach((condition) => params.precipitations.push(condition));//состояние на данный момент
                //     params.day = timestamp.dt_txt.slice(0, 10)
                //     params.hour = timestamp.dt_txt.slice(11, 13);
                //     localStorageList.push(params);
                // });

                // for (let i = 0; i < localStorageList.length; i += 8) {
                //     state.fiveDaysData.push(localStorageList.slice(i, i + 8));
                // }
                // console.log("updateData5", state.fiveDaysData);
                // console.log("params", tempRange)