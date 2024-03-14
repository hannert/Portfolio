import CoffeeIcon from '@mui/icons-material/Coffee';
import XIcon from '@mui/icons-material/X';
import { ButtonGroup, IconButton } from "@mui/material";
import Box from "@mui/material/Box";

export default function Socials(){
    return(<Box sx={{position:"fixed", top:"0", right:"0"}}>
        <ButtonGroup
            orientation='vertical'
            size='small'
        >
            <IconButton disableRipple>
                <XIcon></XIcon>
            </IconButton>
            <IconButton disableRipple>
                <CoffeeIcon></CoffeeIcon>
            </IconButton>
        </ButtonGroup>
    </Box>)
}