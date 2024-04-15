import { Box, Stack, Typography } from '@mui/material';
import { TimeWidget } from './TimeWidget/TimeWidget';
import { useSelector } from 'react-redux';
import { UpdateHandler } from '../updateHandler/UpdateHandler';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const theme = createTheme();

theme.typography.h3 = {
    fontWeight: 'light',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
};
const CurrentWeatherWidget = () => {
    const currentWeatherRedux = useSelector(state => state.currentForecast)
    return (
        <>
            <UpdateHandler type='Current'></UpdateHandler>
            <Box margin="auto" sx={{ borderRadius: 5, width: "80%", height: "226px", margin: "auto", backgroundColor: "#d9d9d96e" }}>
                <Stack direction="row">
                    {currentWeatherRedux.data ? <Stack direction="column" margin="auto">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" marginTop={"10%"} color="#343434">{currentWeatherRedux.curTemp}°С</Typography>
                            <Stack direction="column">{currentWeatherRedux.precipitations &&
                                currentWeatherRedux.precipitations.map((state, index) =>
                                    <Typography variant="h3" color="#343434" fontWeight={'medium'} key={index}>{state.main}</Typography>)}
                            </Stack>
                            <Typography variant="h3" marginTop={"10%"} color="#343434">Feels like {currentWeatherRedux.feelsLike}°С</Typography>
                        </ThemeProvider>
                    </Stack> : ''}
                    <TimeWidget></TimeWidget>
                </Stack>
            </Box>
        </>
    )
}
export default CurrentWeatherWidget;