import { Box, Stack, Typography } from '@mui/material';
import currentFormat from '../../assets/currentWeatherJson/currentFormat.json'
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import { useSelector } from 'react-redux';

const CurrentWeatherWidget = () => {
    let { day, month, weekDay, time } = getDate();
    const currentWeatherRedux=useSelector(state=>state.currentForecast)
    // useEffect(() => {
    //     if (city) {
    //         //https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={API key}
    //         fetch("https://dummyjson.com/users/search?q=")//фейк апи
    //             .then(data => {
    //                 data.json()
    //                     .then((result) => {
    //                         //setData(result);
    //                         localStorage.setItem("currentWeather", JSON.stringify(result));
    //                     })// json ответ от запроса запишется в переменную data 
    //             })
    //             .catch(error => {
    //                 setMode("offline");
    //                 let collection = localStorage.getItem("currentWether");
    //                 // setData(JSON.parse(collection));
    //                 console.log("collection", collection);
    //             });
    //     }// else if (userLocation.latitude) {
        //     fetch(//"https://api.openweathermap.org/data/2.5/weather?lat={userLocation.latitude}&lon={userLocation.longitude}&appid={API key}")
        //         .then(data => {
        //             data.json()
        //                 .then((result) => {
        //                     setData(result);
        //                     localStorage.setItem("currentWeather", JSON.stringify(result));
        //                 })// json ответ от запроса запишется в переменную data 
        //         })
        //         .catch(error => {
        //             setMode("offline");
        //             let collection = localStorage.getItem("currentWether");
        //             setData(collection);
        //         });
        // }

    // }, [city]);
    return (
        <>
            <Box margin="auto" sx={{ borderRadius: 5, width: "92%", height: "226px", margin: "auto", backgroundColor: "#d9d9d96e" }}>
                <Stack direction="row">
                    {data ? <Stack direction="column" margin="auto">
                        <Typography fontSize={56} marginTop={"10%"} color="#343434">{curTemp}°С</Typography>
                        <Typography fontSize={16} margin={"7%"} color="#343434">{state}</Typography>
                        <Typography fontSize={16} margin={"7%"} color="#343434">{minTemp}°С/{maxTemp}°С</Typography>
                    </Stack> : ''}
                    <Stack direction="column" margin="auto">
                        <Typography fontSize={16} marginTop={"5%"} color="#343434">{month} {day},<br /> {weekDay}</Typography>
                        <Typography fontSize={16} marginTop={"5%"} color="#343434">{time}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
export default CurrentWeatherWidget;