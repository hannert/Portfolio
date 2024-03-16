"use client";

import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
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
          minHeight: "600px",
          backgrounDColor: "#f9eddf",
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
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", paddingTop: "12px" }}
          >
            DEMO
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={"/images/meatball.png"}
                      height={200}
                      width={200}
                      alt={"awesome"}
                    />
                  </Container>

                  <Typography variant="caption" align="center">
                    naur...
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h3">Hello :3 !!</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
                  at augue eget. Ornare lectus sit amet est placerat in egestas
                  erat.
                </Typography>
                <Typography variant="subtitle2">Yap yap yap yap 🤐</Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Card>
    </Box>
  );
}
