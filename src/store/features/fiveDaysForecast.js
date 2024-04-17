import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFiveDaysForecast = createAsyncThunk('fetchFiveDaysForecast', async (data) => {
    if (data.location.city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.location.city}&appid=${data.ApiKey}`);
        // const response = await fetch("https://dummyjson.com/users/search?q=");
        return response.json();
    } if (data.location.latitude) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=${data.ApiKey}`);
        // const response = await fetch("https://dummyjson.com/users/search?q=");
        
        return response.json();
    }
})

export const fiveDaysForecast = createSlice({
    name: "fiveDaysForecast",
    initialState: {
        data: null || JSON.parse(localStorage.getItem("data5")),
        loading: false,
        fiveDaysData: null||JSON.parse(localStorage.getItem("5daysWeather")) ,
        error: null,
        dataList: null,
    },
    reducers: {
        updateData5: (state) => {
            let tempRange = [];//массив всех температур для определения шкалы
            state.fiveDaysData = []
            if (state.error === null && state.loading === false) {
                let fiveDaysList = [];// массив 5 дней

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

                    state.fiveDaysData.push(dayArray);
                });
                localStorage.setItem('5daysWeather', JSON.stringify(state.fiveDaysData));
            }
        },
        updateDate:(state,action)=>{
            const dateStr = action.payload;
            const date = new Date(dateStr);

            const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const dayOfWeek = daysOfWeek[date.getDay()];
            const dayOfMonth = date.getDate();
const month = months[date.getMonth()];

const formattedDate = `${dayOfWeek} ${dayOfMonth} of ${month}`;
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