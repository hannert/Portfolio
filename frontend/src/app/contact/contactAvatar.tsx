'use client'

import Box from "@mui/material/Box";
import Image from "next/image";



export default function ContactAvatar() {

  let imagePath = "winton.png"

  return(
    <Box
      sx={{ position: "relative", bottom: "0", left: "0" }}
      >
      <Image 
        src={"/images/" + imagePath}
        alt={"placeholder"}
        width={0}
        height={0}
        sizes="80vh"
        style={{ width: "20%", height: "auto", maxWidth: "100vw" }}
      />
    </Box>
  )
}