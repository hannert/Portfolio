"use client";

import { Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Scroll({ tabs }: { tabs: string[] }) {
  const [active, setActive] = useState(false);
  const [currentPage, setPage] = useState(usePathname());

  const activePage = usePathname();

  const suppliedProps = tabs.join(" ");

  // Change the active page styling when we change the page
  useEffect(() => {
    setPage(activePage);
    console.log("Page Changed!");
    console.log(activePage);
  }, [activePage]);

  const variants = {
    inactive: { opacity: 0.2 },
    animate: {
      opacity: 1,
      fontWeight: 600,
      fontSize: "24px",
    },
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20vh",
        height: "400px",
        color: "black",
      }}
    >
      <Link href="/">
        <Tooltip title="Landing Page" placement="top">
          <IconButton>
            <Image
              src={"/images/meatball.png"}
              height={64}
              width={64}
              alt={"awesome"}
            />
          </IconButton>          
        </Tooltip>

      </Link>

      <Typography variant="caption">debugging purposes</Typography>
      <Typography variant="h6">Current Page: {currentPage}</Typography>
      <Box>
        {tabs.map((tabName) => {
          return (
            <Box key="{tabName}">
              {
                <Link href={"/" + tabName}>
                  <Typography
                    variant="subtitle2"
                    component={motion.div}
                    variants={variants}
                    initial="initial"
                    animate={
                      "/" + tabName === currentPage ? "animate" : "initial"
                    }
                    exit={{}}
                  >
                    {tabName}
                  </Typography>
                </Link>
              }
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
