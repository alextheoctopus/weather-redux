import { createSlice } from "@reduxjs/toolkit";
export const time = createSlice({
    name: "time",
    initialState: {
        day: null,
        weekDay: null,
        month: null,
        time: null,
        lastFetchedCurrent: null || localStorage.getItem('lastFetchedTimeCurrent'),
        lastFetchedFive: null || localStorage.getItem('lastFetchedTimeFive')
    },
    reducers: {
        getDate: (state, action) => {
            let currentDate = new Date();
            let month = currentDate.toLocaleString('en-us', { month: 'long' });
            let day = currentDate.getDate();
            let currentTime = currentDate.toString();
            let time = currentTime.slice(15, 21);
            let days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];
            if (action.payload === 'currentTime') {
                state.month = month;
                state.day = day;
                let n = currentDate.getDay();
                state.time = time;
                state.weekDay = days[n];
            } else if (action.payload === 'lastFetchedTimeCurrent') {
                localStorage.setItem('lastFetchedTimeCurrent', day + " " + month + " " + time);
                state.lastFetchedCurrent = day + " " + month + " " + time;
            } else if (action.payload === 'lastFetchedTimeFive') {
                localStorage.setItem('lastFetchedTimeFive', day + " " + month + " " + time);
                state.lastFetchedFive = day + " " + month + " " + time;
            }
        },
    }
});
export const { getDate } = time.actions;
export default time.reducer;