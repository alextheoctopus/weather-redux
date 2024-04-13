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
                        "temp": 270,
                        "feels_like": 279,
                        "temp_min": 279,
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
                    "dt_txt": "2024-04-13 03:00:00",
                },
                {
                    "dt": 1661871600,
                    "main": {
                        "temp": 271,
                        "feels_like": 279,
                        "temp_min": 268,
                        "temp_max": 286,
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
                    "dt_txt": "2024-04-13 06:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 273,
                        "feels_like": 279,
                        "temp_min": 265,
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
                    "dt_txt": "2024-04-13 09:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 273,
                        "feels_like": 279,
                        "temp_min": 275,
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
                    "dt_txt": "2024-04-13 12:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 274,
                        "feels_like": 279,
                        "temp_min": 272,
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
                    "dt_txt": "2024-04-13 15:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 275,
                        "feels_like": 279,
                        "temp_min": 277,
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
                    "dt_txt": "2024-04-13 18:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 273,
                        "feels_like": 279,
                        "temp_min": 271,
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
                    "dt_txt": "2024-04-13 21:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 270,
                        "feels_like": 279,
                        "temp_min": 272,
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
                    "dt_txt": "2024-04-14 00:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 268,
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
                    "dt_txt": "2024-04-14 03:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 268,
                        "feels_like": 279,
                        "temp_min": 267,
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
                    "dt_txt": "2024-04-14 06:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 267,
                        "feels_like": 279,
                        "temp_min": 264,
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
                    "dt_txt": "2024-04-14 09:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 269,
                        "feels_like": 279,
                        "temp_min": 275,
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
                    "dt_txt": "2024-04-14 12:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 273,
                        "feels_like": 279,
                        "temp_min": 277,
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
                    "dt_txt": "2024-04-14 15:00:00",

                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 279,
                        "feels_like": 279,
                        "temp_min": 278,
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
                    "dt_txt": "2024-04-14 18:00:00",
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 280,
                        "feels_like": 279,
                        "temp_min": 271,
                        "temp_max": 282,
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
                    "dt_txt": "2024-04-15 21:00:00"
                }, {
                    "dt": 1661871600,
                    "main": {
                        "temp": 280,
                        "feels_like": 279,
                        "temp_min": 271,
                        "temp_max": 282,
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
                    "dt_txt": "2024-04-15 00:00:00"
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
        fiveDaysData: JSON.parse(localStorage.getItem("5daysWeather")) || null,
        error: null,
        dataList: null,
        ApiKey: "fineg5236gernjeongre",
    },
    reducers: {
        updateData5: (state) => {
            state.fiveDaysData = []
            if (state.error === null && state.loading === false) {
                let localStorageList = [];
                state.data.list.forEach((timestamp) => {
                    let params = {
                        // maxTemp: null,
                        // minTemp: null,
                        temp: null,
                        precipitations: [],
                        probabilityOfPerc: null,
                        day: null,
                        hour: null,
                        pop: null
                    };
                    // Math.round(timestamp.main.temp_max - 273) >= 0 ?
                    //     params.maxTemp = "+" + Math.round(timestamp.main.temp_max - 273) :
                    //     params.maxTemp = Math.round(timestamp.main.temp_max - 273)
                    Math.round(timestamp.main.temp - 273) >= 0 ?
                        params.temp = "+" + Math.round(timestamp.main.temp - 273) :
                        params.temp = Math.round(timestamp.main.temp - 273)
                    params.pop = timestamp.pop * 100 + "% ";
                    timestamp.weather.forEach((condition) => params.precipitations.push(condition));//состояние на данный момент
                    params.day = timestamp.dt_txt.slice(0, 10);
                    params.hour = timestamp.dt_txt.slice(11, 13);
                    localStorageList.push(params);
                });
                //divideIntoDays
                let dayData = [];

                for (let i = 0; i < localStorageList.length; i += 8) {
                    state.fiveDaysData.push(localStorageList.slice(i, i + 8));
                }
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