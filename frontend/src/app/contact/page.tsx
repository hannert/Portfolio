import Box from "@mui/material/Box";
import ContactPage from "./contactPage";

export default function Page() {
    return(
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", maxWidth:"100%"}}>
            <ContactPage></ContactPage>
        </Box>
        
    )
}