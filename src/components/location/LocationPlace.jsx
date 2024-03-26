import { Stack, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useSelector } from "react-redux";
export const LocationPlace = () => {
    let { loc, setLoc } = useContext(AppContext);
    const reduxLocation = useSelector(state => state.location);
    return (
        <Stack direction="column" justifyContent={"right"} alignItems={"center"} margin={"auto"}>
            <Typography color="#ffffff" fontSize={14} alignItems={'center'} >You are now in</Typography>
            <Button sx={{ color: "white", width: "100%" }} onClick={() => setLoc(!loc)}>
                {reduxLocation.city ? <Typography color="#ffffff" fontSize={12}>{reduxLocation.city}</Typography> :
                    reduxLocation.location ? <Typography color="#ffffff" fontSize={12}>{reduxLocation.location.latitude}<br />{reduxLocation.location.longitude}</Typography> :
                        reduxLocation.error ? <Typography color="#ffffff" fontSize={12}>Ошибка</Typography> :
                            <Typography color="#ffffff" fontSize={12}>Select location</Typography>}
            </Button>
        </Stack>
    );
}
export default LocationPlace;