"use client";

import { ImageList, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";


export default function PortfolioPage() {

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
        <ImageList variant="masonry" cols={3} gap={8}>
          <ImageListItem>
            <img
              src={"/images/winton.png"}
              alt={"awesome"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={"/images/meatball.png"}
              alt={"awesome"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={"/images/headdent.png"}
              alt={"awesome"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={"/images/meatball.png"}
              alt={"awesome"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={"/images/headdent.png"}
              alt={"awesome"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={"/images/meatball.png"}
              alt={"awesome"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={"/images/headdent.png"}
              alt={"awesome"}
            />
          </ImageListItem>
        </ImageList>



      </Card>
    </Box>
  );
}
