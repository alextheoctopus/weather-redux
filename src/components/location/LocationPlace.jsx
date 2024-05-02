import { Stack, Typography, Button, Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useSelector } from "react-redux";
export const LocationPlace = () => {
    let { loc, setLoc } = useContext(AppContext);
    const reduxLocation = useSelector(state => state.location);
    return (
        <Box sx={{ background: "#EEEDED", margin: 'auto', borderRadius: 5, padding: "2%", marginTop: "1%" }}>
            <Stack direction="column" justifyContent={"right"} alignItems={"center"} margin={"auto"}>
                <Typography color="#343434" fontSize={14} fontWeight={'medium'} alignItems={'center'} >You are now in</Typography>
                <Button sx={{ color: "#343434", width: "100%" }} onClick={() => setLoc(!loc)}>
                    {reduxLocation.location.city ? <Typography color="#343434" fontWeight={'Bold'} fontSize={12}>{reduxLocation.location.city}</Typography> :
                        reduxLocation.location.latitude ? <Typography color="#343434" fontWeight={'Bold'} fontSize={12}>{reduxLocation.location.latitude}<br />{reduxLocation.location.longitude}</Typography> :
                            reduxLocation.error ? <Typography color="#343434" fontWeight={'Bold'} fontSize={12}>Ошибка</Typography> :
                                <Typography color="#343434" fontWeight={'Bold'} fontSize={12}>Select location</Typography>}
                </Button>
            </Stack>
        </Box>
    );
}
export default LocationPlace;