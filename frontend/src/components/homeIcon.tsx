'use client'

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import { usePathname } from "next/navigation";


export default function HomeIcon() {

  const [currentPage, setPage] = useState(usePathname());

  const activePage = usePathname();

  // Change the active page styling when we change the page
  useEffect(() => {
    setPage(activePage);
  }, [activePage]);

  const variants = {
    inactive: {
      x: -64,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        position:"fixed",
        top:0,
        left:0,
      }}
      component={motion.div}
      variants={variants}
      animate={currentPage === "/" ? "inactive" : "active"}
    >
      <Link href="/">
        <Tooltip title="Landing Page" placement="top">
          <IconButton>
            <Image
              src={"/images/headdent.png"}
              height={64}
              width={64}
              alt={"awesome"}
            />
          </IconButton>
        </Tooltip>
      </Link>
    </Box>
  );
}
