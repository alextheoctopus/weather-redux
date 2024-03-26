import { Typography, Box, Stack } from '@mui/material';
import currentWeather from '../../assets/currentWeatherJson/currentFormat.json'
const ParameterWidget = (props) => {
    //вообще если с запросом, 
    //то надо сюда в пропсы из апп передавать data а внутри нее json ответ от погоды
    // но у меня данные из json файла поэтому записываю их сразу в переменную
    let data = currentWeather;
    //эта проверка нужна только для апи, чтобы проверить пришли данные или нет
    let humidity, wind, direction, pressure = null;
    if (data) {
        pressure = -263 + data.main.pressure + "mm of mercury";
        humidity = data.main.humidity + "%";
        wind = data.wind.speed;
        let deg = data.wind.deg;
        if (deg >= 0 && deg < 45) {
            direction = "North";
        } else if (deg >= 45 && deg < 90) {
            direction = "North-East";
        } else if (deg >= 90 && deg < 135) {
            direction = "East";
        } else if (deg >= 135 && deg < 180) {
            direction = "South-East";
        } else if (deg >= 180 && deg < 225) {
            direction = "South";
        } else if (deg >= 225 && deg < 270) {
            direction = "South-West";
        } else if (deg >= 270 && deg < 315) {
            direction = "West";
        } else if (deg >= 315 && deg < 360) {
            direction = "North-West";
        } else if (deg === 0 || deg === 360) {
            direction = "North";
        }
    }
    let boxStyle = {
        borderRadius: 5,
        width: props.width,
        height: "90px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
        backgroundColor: "#d9d9d96e"
    }
    return (
        <Box sx={boxStyle}>
            <Typography marginTop={"10%"} fontSize={22}>{props.name}</Typography>
            {props.name === "Wind" ?
                <Stack direction="row">
                    <Typography margin="auto">{wind}m/s</Typography>
                    <Typography margin="auto">{direction}</Typography>
                </Stack>
                :
                props.name === "Humidity" ?
                    <>
                        <Typography margin="auto" >{humidity}</Typography>
                    </> :
                    props.name === "Pressure" ?
                        <>
                            <Typography>{pressure}</Typography>
                        </> : ''
            }
        </Box >
    )
}
export default ParameterWidget;