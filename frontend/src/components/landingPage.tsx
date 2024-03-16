import Box from "@mui/material/Box";
import Splash from "./splash";
import SplashCard from "./splashCard";
import Credits from "./credits";



export default function LandingPage() {
    return(
        <Box sx={{position:"relative"}}>
        <Splash></Splash>
        <SplashCard></SplashCard>
        <Credits></Credits>
        </Box>
    )
}