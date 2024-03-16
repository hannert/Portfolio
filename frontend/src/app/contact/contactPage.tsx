"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Box
      key="aboutPage"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
      component={motion.div}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Card
        sx={{
          width: "80%",
          height: "600px",
          backgrounDColor: "#f9eddf",
          minWidth: "600px",
        }}
        elevation={4}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Image
              src={"/images/winton.png"}
              height={100}
              width={50}
              alt={"awesome"}
            />
            <Typography variant="h4">Contact</Typography>
          </Box>
        </Container>
      </Card>
    </Box>
  );
}
