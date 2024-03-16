'use client'

import LandingPage from "@/components/landingPage";
import { Box } from "@mui/material";
// Landing page for the website!
export default function Home() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", maxWidth:"100%"}}>
      <LandingPage />
    </Box>
  );
}
