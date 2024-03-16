import { Typography } from "@mui/material"
import Box from "@mui/material/Box"

export default function Credits(){
    return(
        <Box sx={{position:"fixed", bottom:0, right:8}}>
            <Typography variant="caption">
                Developed by @hannert
            </Typography>
        </Box>
    )
}