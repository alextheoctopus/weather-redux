import { Box, Stack, Typography } from '@mui/material';
import { TimeWidget } from './TimeWidget/TimeWidget';
import { useSelector } from 'react-redux';
import { UpdateHandler } from '../updateHandler/UpdateHandler';
const CurrentWeatherWidget = () => {
    const currentWeatherRedux = useSelector(state => state.currentForecast)
    return (
        <>
            <UpdateHandler type='Current'></UpdateHandler>
            <Box margin="auto" sx={{ borderRadius: 5, width: "92%", height: "226px", margin: "auto", backgroundColor: "#d9d9d96e" }}>
                <Stack direction="row">
                    {currentWeatherRedux.data ? <Stack direction="column" margin="auto">
                        <Typography fontSize={56} marginTop={"10%"} color="#343434">{currentWeatherRedux.curTemp}°С</Typography>
                        <Stack direction="column">{currentWeatherRedux.precipitations &&
                            currentWeatherRedux.precipitations.map((state, index) =>
                                <Typography fontSize={14} color="#343434" key={index}>{state.main}</Typography>)}
                        </Stack>
                        <Typography fontSize={16} margin={"5%"} color="#343434">{currentWeatherRedux.minTemp}°С/{currentWeatherRedux.maxTemp}°С</Typography>
                        <Typography fontSize={16} color="#343434">Probability of precipitation:{currentWeatherRedux.pop}</Typography>
                    </Stack> : ''}
                    <TimeWidget></TimeWidget>
                </Stack>
            </Box>
        </>
    )
}
export default CurrentWeatherWidget;