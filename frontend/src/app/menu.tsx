"use client";

import TestExit from "@/components/testAnimate";
import { Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu({ tabs }: { tabs: string[] }) {
  const [active, setActive] = useState(false);
  const [currentPage, setPage] = useState(usePathname());
  const [width, setWidth] = useState(0);

  const activePage = usePathname();

  const suppliedProps = tabs.join(" ");

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

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
    <Box>
      {width > 600 ? (
        <Box
          sx={{
            position: "fixed",
            bottom: "10vh",
            height: "400px",
            color: "black",
            zIndex: 9999,
          }}
        >
          <Box>
            {tabs.map((tabName) => {
              return (
                <Box key={tabName}>
                  {
                    <Link href={"/" + tabName}>
                      <Typography
                        sx={{ fontFamily: "montserrat" }}
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
          <AnimatePresence>
            {"/" === currentPage && <TestExit></TestExit>}
          </AnimatePresence>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
