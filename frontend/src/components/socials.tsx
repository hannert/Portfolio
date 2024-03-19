"use client";

import XIcon from "@mui/icons-material/X";
import {
	ButtonGroup,
	IconButton,
	SpeedDial,
	SpeedDialAction,
	SpeedDialIcon,
	SvgIcon,
} from "@mui/material";
import Box from "@mui/material/Box";
import CoffeeIcon from "./coffeeIcon";
import DiscordIcon from "./discordIcon";
import TwitchIcon from "./twitchIcon";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useWindowSize } from "@uidotdev/usehooks";


export default function Socials() {
  const size = useWindowSize();


  return (
    <Box sx={{ position: "fixed", top: "0", right: "0" }}>
      {Number(size.width) > 600 ? (
        <ButtonGroup orientation="vertical" size="small">
          <IconButton disableRipple>
            <XIcon></XIcon>
          </IconButton>
          <IconButton disableRipple>
            <SvgIcon>
              <CoffeeIcon></CoffeeIcon>
            </SvgIcon>
          </IconButton>
          <IconButton disableRipple>
            <SvgIcon>
              <DiscordIcon></DiscordIcon>
            </SvgIcon>
          </IconButton>
          <IconButton disableRipple>
            <SvgIcon>
              <TwitchIcon></TwitchIcon>
            </SvgIcon>
          </IconButton>
        </ButtonGroup>
      ) : (
        <SpeedDial
          ariaLabel="mobileSocials"
          direction="left"
          icon={<SpeedDialIcon icon={<ChevronLeftIcon/>} openIcon={<ChevronRightIcon />} />}
					sx={{
						paddingTop: "8px",
						paddingRight: "8px"
					}}
        >
          <SpeedDialAction key="X" icon={<XIcon />}></SpeedDialAction>
          <SpeedDialAction key="Coffee" icon={<SvgIcon><CoffeeIcon /></SvgIcon>}></SpeedDialAction>
          <SpeedDialAction key="Discord" icon={<SvgIcon><DiscordIcon /></SvgIcon>}></SpeedDialAction>
          <SpeedDialAction key="Twitch" icon={<SvgIcon><TwitchIcon /></SvgIcon>}></SpeedDialAction>
        </SpeedDial>
      )}
    </Box>
  );
}
