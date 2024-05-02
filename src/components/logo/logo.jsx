import { Typography, Box } from "@mui/material";

export const Logo = () => {
    return (
    <Box sx={{ background: "#EEEDED", margin: 'auto', borderRadius: 5, padding:"2%",marginTop:"1%" }}>
        <Typography color="#343434" fontSize={24} align='left' margin={'auto'}>What's <br /> the weather?</Typography >
    </Box>);
}
export default Logo;