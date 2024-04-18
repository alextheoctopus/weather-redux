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
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',
    },
};
const CurrentWeatherWidget = () => {
    const currentWeatherRedux = useSelector(state => state.currentForecast)
    return (
        <>
            <UpdateHandler type='Current'></UpdateHandler>
            <Box margin="auto" sx={{ paddingTop:"3%", paddingBottom:"3%", borderRadius: 5, width: "80%", margin: "auto", backgroundColor: "#d9d9d96e" }}>
                <Stack direction="row">
                    <ThemeProvider theme={theme}>
                        {currentWeatherRedux.data ?
                            <Stack direction="column" padding={0} margin={"auto"}>
                                <Typography variant="h3" color="#343434" fontWeight={'light'}>{currentWeatherRedux.curTemp}°С</Typography>
                                {currentWeatherRedux.precipitations &&
                                    currentWeatherRedux.precipitations.map((state, index) =>
                                        <Typography variant="h3" color="#343434" fontWeight={'medium'} key={index}>{state.main}</Typography>)}

                                <Typography variant="h3" color="#343434">Feels like
                                    <Typography variant="h3" fontWeight={'light'}>{currentWeatherRedux.feelsLike}°С</Typography>
                                </Typography>
                            </Stack>

                            : ''}
                        <TimeWidget></TimeWidget>
                    </ThemeProvider>
                </Stack>
            </Box>
        </>
    )
}
export default CurrentWeatherWidget;