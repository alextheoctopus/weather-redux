import { Typography, Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    color: "#343434",
    '@media (min-width:600px)': {
        fontSize: '1.2rem',

    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',

    },
};
theme.typography.h4 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {

        fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {

        fontSize: '1.7rem',
    },
};
export const ParameterWidget = (props) => {
    const currentForecast = useSelector(state => state.currentForecast);
    const airPolution = useSelector(state => state.airPolution);

    let boxStyle = {
        borderRadius: 5,
        width: props.width,
        backgroundColor: "#d9d9d96e",
        paddingBottom: "3%"
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={boxStyle}>
                <Typography variant="h3" marginTop={"3%"} fontSize={22}>{props.name}</Typography>
                {props.name === "Wind" ?
                    <Stack direction="row">
                        <Typography fontWeight={'light'} variant="h4" margin="auto">{currentForecast.wind}m/s</Typography>
                        <Typography fontWeight={'light'} variant="h4" margin="auto">{currentForecast.direction}</Typography>
                    </Stack>
                    :
                    props.name === "Humidity" ?
                        <>
                            <Typography fontWeight={'light'} variant="h4" margin="auto" >{currentForecast.humidity}</Typography>
                        </> :
                        props.name === "Pressure" ?
                            <>
                                <Typography fontWeight={'light'} variant="h4">{currentForecast.pressure}</Typography>
                            </> :
                            props.name === "Visibility" ?
                                <>
                                    <Typography fontWeight={'light'} variant="h4">{currentForecast.visibility}</Typography>
                                </> :
                                props.name === "Sunrise" ?
                                    <>
                                        <Typography fontWeight={'light'} variant="h4">{currentForecast.sunrise}</Typography>
                                    </> :
                                    props.name === "Sunset" ?
                                        <>
                                            <Typography fontWeight={'light'} variant="h4">{currentForecast.sunset}</Typography>
                                        </> :
                                        props.name === "AQI" ?
                                            <>
                                                <Typography fontWeight={'light'} variant="h4">{airPolution.estimate}</Typography>
                                            </> : ''
                }
            </Box >
        </ThemeProvider>
    )
}