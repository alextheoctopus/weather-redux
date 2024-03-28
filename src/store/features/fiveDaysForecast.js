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
        data:
        {
            "cnt": 40,
            "list": [
                {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 278,
                        "feels_like": 279,
                        "temp_min": 270,
                        "temp_max": 280,
                        "pressure": 1009,
                        "humidity": 70,
                    },
                    "weather": [
                        {
                            "main": "Rain",
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.62,
                        "deg": 349,
                        "gust": 1.18
                    },
                    "visibility": 10000,
                    "pop": 0.60,
                    "rain": {
                        "3h": 0.26
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-03-28 15:00:00"
                },
            ],
            "city": {
                "name": "Izhevsk",
                "country": "Russia",
                "sunrise": 1661834187,
                "sunset": 1661882248
            }
        },
        loading: false,
        error: null,
        dataList: JSON.parse(localStorage.getItem("5daysWeather")) || null,
        ApiKey: "fineg5236gernjeongre",
    },
    reducers: {
        updateData5: (state) => {
            if (state.error === null && state.loading === false) {
                let localStorageList = [];
                state.data.list.forEach((timestamp) => {
                    let params = {
                        maxTemp: null,
                        minTemp: null,
                        precipitations: [],
                        probabilityOfPerc: null,
                        time: null,
                        pop:null
                    };
                    Math.round(timestamp.main.temp_max - 273) >= 0 ?
                        params.maxTemp = "+" + Math.round(timestamp.main.temp_max - 273) :
                        params.maxTemp = Math.round(timestamp.main.temp_max - 273)
                    Math.round(timestamp.main.temp_min - 273) >= 0 ?
                        params.minTemp = "+" + Math.round(timestamp.main.temp_min - 273) :
                        params.minTemp = Math.round(timestamp.main.temp_min - 273)
                    params.pop = timestamp.pop * 100 + "% ";
                    timestamp.weather.forEach((condition) => params.precipitations.push(condition));//состояние на данный момент
                    params.time = timestamp.dt_txt;
                    localStorageList.push(params);
                });
                //divideIntoDays
                let dayData = [];
                let fiveDaysData = [];
                localStorageList.forEach((threeHourData, index) => {
                    dayData.push(threeHourData);
                    if (index % 7 === 0 && index != 0) {
                        fiveDaysData.push(dayData);
                        dayData = [];
                    }
                })
                localStorage.setItem('5daysWeather', JSON.stringify(fiveDaysData));
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
                // state.data = action.payload;
            })
            .addCase(fetchFiveDaysForecast.rejected, (state, action) => {
                state.loading = false; //и если ошибка, то мы выводим и ошибку(офлайн) и последние данные из локалсторедж
                state.error = action.error.message;
            });
    }
});
export const { updateData5 } = fiveDaysForecast.actions;
export default fiveDaysForecast.reducer;