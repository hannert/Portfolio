import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
      component={motion.div}
    >
      <Card sx={{ width: "40%", height: "600px", backgrounDColor: "#f9eddf" }}>
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
              height={200}
              width={200}
              alt={"awesome"}
            />
          </Box>
        </Container>
      </Card>
    </Box>
  );
}
