"use client";

import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import ContactAvatar from "./contactAvatar";
import ContactCard from "./contactCard";

export default function ContactPage() {
  return (
    <Box
      key="aboutPage"
      sx={{
        maxWidth: "80%",
        position:"relative",
        minHeight: "600px"
      }}
      component={motion.div}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <ContactCard />
      <ContactAvatar />
      
    </Box>
  );
}
