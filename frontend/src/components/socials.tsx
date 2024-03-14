import XIcon from "@mui/icons-material/X";
import { ButtonGroup, IconButton, SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import CoffeeIcon from "./coffeeIcon";
import DiscordIcon from "./discordIcon";
import TwitchIcon from "./twitchIcon";

export default function Socials() {
  return (
    <Box sx={{ position: "fixed", top: "0", right: "0" }}>
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
    </Box>
  );
}
