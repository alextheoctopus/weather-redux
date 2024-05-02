import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAirPolution = createAsyncThunk('fetchAirPolution', async (data) => {
    // if (data.location.city) {
    //     //    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.location.city}&appid=${data.ApiKey}`);
    //     const response = await fetch("https://dummyjson.com/users/search?q=");
    //     return response.json();
    // } 
    if (data.location.latitude) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=${data.ApiKey}`);
        // const response = await fetch("https://dummyjson.com/users/search?q=");

        return response.json();
    }
});

export const airPolution = createSlice({
    name: "airPolution",
    initialState: {
        data: null || JSON.parse(localStorage.getItem('data')),
        loading: false,
        error: '',
        aqi: null || localStorage.getItem('aqi'),
        estimate: null || localStorage.getItem('estimate'),
    },
    reducers: {
        updateData: (state) => {
            state.aqi === 1 ?
                state.estimate = "Good" :
                state.aqi === 2 ?
                    state.estimate = "Fair"
                    : state.aqi === 3 ?
                        state.estimate = "Moderate"
                        : state.aqi === 4 ?
                            state.estimate = "Poor"
                            : state.aqi === 5 ?
                                state.estimate = "Very Poor"
                                : state.estimate = ""
            localStorage.setItem('estimate', state.estimate);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAirPolution.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAirPolution.fulfilled, (state, action) => {
                state.loading = false;
                let data = action.payload;
                state.aqi = data.list[0].main.aqi
                localStorage.setItem('aqi', JSON.stringify(state.aqi));
                airPolution.caseReducers.updateData(state, action);
            })
            .addCase(fetchAirPolution.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export const { updateData } = airPolution.actions;
export default airPolution.reducer;