import { useState } from "react";
import { Box, Button, Typography, Stack, Input } from '@mui/material';
import { useSelector } from "react-redux";
import { getCities, setCity, setCountry, setCities } from "../../../store/features/location";
export const CountriesList = ({ dispatch, setLoc }) => {
    const reduxLocation = useSelector(state => state.location);
    const [value, setValue] = useState('');

    const inputHandler = (event) => {
        setValue(event.target.value);
    }

    const regex = new RegExp(`^${value}`, "i");
    const countries = Object.keys(reduxLocation.countries)
    return (
        <Stack direction="column" justifyContent="stretch" alignItems="stretch">
            <Stack direction="row">
                <Input color='secondary' onChange={inputHandler} value={value}></Input>
                {reduxLocation.cities && <Button size='small'
                    onClick={() => { dispatch(setCities(null)); setValue('') }}>Back</Button>}
            </Stack>
            {!reduxLocation.cities ? countries.map((location, ind) =>
                regex.test(location) ?
                    <Button key={ind} size='small' onClick={() => {
                        dispatch(setCountry(location));
                        setValue('');
                        dispatch(getCities(location))
                    }}>
                        <Typography fontSize={12} color={"white"}>{location}</Typography>
                    </Button> : '') :
                reduxLocation.cities.map((town, ind) =>
                    regex.test(town) ?
                        <Button key={ind} size='small' onClick={() => { dispatch(setCity(town)); setLoc(false); dispatch(setCities(null)) }}>
                            <Typography fontSize={12} color={"white"}>{town}</Typography>
                        </Button> : '')}
        </Stack>
    );
}