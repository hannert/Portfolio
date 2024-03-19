"use client";

import { Container, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import AboutCard from "./aboutCard";

export default function AboutPage() {
  const size = useWindowSize();

  return (
    <Box
      key="aboutPage"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
      component={motion.div}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Image
        src={"/images/aboutmepanel.png"}
        alt="aboutMePanel"
        height={0}
        width={0}
        sizes="80vh"
        style={{ width: "auto", height: "auto" }}
      />
      {Number(size.width) > 600 ? (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Image
              src={"/images/aboutmeavatar.png"}
              height={0}
              width={0}
              sizes="50vw"
              style={{ width: "100%", height: "auto" }}
              alt={"awesome"}
            />
          </Grid>

          <Grid item xs={8}>
            <AboutCard />
          </Grid>
        </Grid>
      ) : (
        <Container>
          <AboutCard />
        </Container>
        
      )}
    </Box>
  );
}
