"useClient";

import { Box, List, ListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function SplashCard() {
  const entranceDelay = 0.4;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: entranceDelay,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        right: "64px",
        backgroundColor: "rgb(202,202,202,0.4)",
        backdropFilter: "blur(2px)",
				borderRadius: "8px"
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: entranceDelay }}
    >
      <List
        component={motion.ul}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <ListItem component={motion.li} variants={item}>
          <Typography variant="h6" sx={{fontFamily:"Montserrat"}}> Item number ONE </Typography>
        </ListItem>
        <ListItem component={motion.li} variants={item}>
          <Typography variant="h6" sx={{fontFamily:"Montserrat"}}> Item number TWO </Typography>
        </ListItem>
        <ListItem component={motion.li} variants={item}>
          <Typography variant="h6" sx={{fontFamily:"Montserrat"}}> Item number THREE </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
