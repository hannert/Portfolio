"use client";

import TestExit from "@/components/testAnimate";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useWindowSize } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu({ tabs }: { tabs: string[] }) {
  const [currentPage, setPage] = useState(usePathname());
  const activePage = usePathname();

  const size = useWindowSize();


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
      {Number(size.width) > 600 ? (
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
