"use client";

// Component for landing page splash art
// Lives in root layout so we can KEEP information for the user's session on the site

import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Splash() {
  const [played, setPlayed] = useState(false);

  const variants = {
    enter: { y: 0},
    idle: {
			
      y: [0, 4, 7, 2, 1 , 0],
			transition: {
				duration: 1,
				repeat: Infinity,
			}
			
    },
  };



  return (
    <Box
      sx={{ position: "relative", top: "0", left: "0" }}
      component={motion.div}
			variants={variants}
      initial={{ y: -800, opacity: 1 }}
      animate={played === true ?"idle" : "enter"}
			onAnimationComplete={() => setPlayed(true)}
    >
      <Image
        src={"/images/splashart-demoWEBP.webp"}
        width={0}
        height={0}
        sizes="80vh"
        style={{ width: "auto", height: "auto", maxWidth: "100vw" }}
        alt={"awesome"}
        priority
      />
    </Box>
  );
}
