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
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: [0, -2, 0],
      opacity: 1,
    },
  };

  const internal = {};

  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        right: "64px",
        backgroundColor: "rgb(202,202,202,0.4)",
        backdropFilter: "blur(2px)",
        borderRadius: "8px",
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
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Montserrat",
              textShadow: "1px 1px 2px pink",
            }}
            component={motion.div}
            animate={{ y: [0, -1, 0] }}
            transition={{ repeat: Infinity }}
          >
            {" "}
            Item number ONE{" "}
          </Typography>
        </ListItem>
        <ListItem component={motion.li} variants={item}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Montserrat",
              textShadow: "1px 1px 2px pink",
              padding:"8px 8px 8px 8px",
              backgroundColor: "black",
              boxShadow: "2px 2px 4px white",
              borderRadius: "4px"
            }}
            component={motion.div}
            animate={{ y: [0, -1, 0] }}
            transition={{ repeat: Infinity }}
          >
            {" "}
            Item number TWO{" "}
          </Typography>
        </ListItem>
        <ListItem component={motion.li} variants={item}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Montserrat",
              textShadow: "1px 1px 2px pink",
            }}
            component={motion.div}
            animate={{ y: [0, -1, 0] }}
            transition={{ repeat: Infinity }}
          >
            {" "}
            Item number THREE{" "}
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
