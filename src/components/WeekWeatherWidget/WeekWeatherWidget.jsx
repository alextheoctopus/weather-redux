//не знаю в каком формате будут входные данные с апи, но надеюсь массив
import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Box, Typography, Stack } from "@mui/material";
import fiveDaysFormat from '../../assets/FiveDaysWeather/FiveDaysWeather.json';
export default function WeekWeatherWidget() {
    let { city, userLocation } = useContext(AppContext);
    //тут же делаем запрос на 5 дней погоды по городу либо по координатам и получаем 
    /*апи для текущей погоды
    const [data,setData]=useState(null);
    useEffect(()=> 
    if(city){
        fetch(апи для текущей погоды по городу)
            .then(data=>setData(data.json()))// json ответ от запроса запишется в переменную data 
            .catch(error=>console.log(error)));}
    else if(userLocation.latitude){
        fetch(апи для текущей погоды по широте и долготе)
            .then(data=>setData(data.json()))// 
            .catch(error=>console.log(error)));}
    }
    */
    let data = fiveDaysFormat;//пример ответа 
    let weekArr = [];
    let precipitation, minTemp, maxTemp, weekDay = null;
    let currentDate = new Date();
    if (data) {
        data.list.map((day, ind) => {
            Math.round(day.temp.max - 273) >= 0 ?
                maxTemp = "+" + Math.round(day.temp.max - 273) :
                maxTemp = Math.round(day.temp.max - 273)
            Math.round(day.temp.min - 273) >= 0 ?
                minTemp = "+" + Math.round(day.temp.min - 273) :
                minTemp = Math.round(day.temp.min - 273)
            precipitation = day.pop * 100 + "%";

            let days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];

            let n = (currentDate.getDay() + ind) % days.length;
            weekDay = days[n];//вообще надо преобразовывать из ответа апи, но и так я думаю логично
            weekArr.push({
                precipitation: precipitation,
                minTemp: minTemp,
                maxTemp: maxTemp,
                weekDay: weekDay
            })
        })

    }
    let boxStyle = {
        backgroundColor: "rgba(249, 241, 250, 0.51)",
        margin: "auto",
        marginTop: "3%",
        width: "92%",
        height: "28px",
        borderRadius: 5
    }
    return (
        <Stack direction="column">
            {weekArr.map((day, i) => {
                let fontColor;
                i === 0 ? fontColor = "salmon" : fontColor = "#737070";
                return (
                    <Box sx={boxStyle} key={i} padding={"auto"}>
                        <Stack direction="row">
                            <Typography fontSize={14} color={fontColor} marginLeft={"3%"} marginTop={"1%"}>{day.weekDay}</Typography>
                            <Typography fontSize={14} color={fontColor} marginTop={"0.3%"} position="absolute" left={"49%"}>{day.precipitation}</Typography>
                            <Typography fontSize={14} color={fontColor} marginTop={"0.3%"} position="absolute" left={"57%"}>{day.minTemp}/{day.maxTemp}°C</Typography>
                        </Stack>
                    </Box>);
            })}
        </Stack>
    )

}