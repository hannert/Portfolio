'use client'

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Scroll({tabs}: { tabs: string[] }){

    const [active, setActive] = useState(false);
    const [currentPage, setPage] = useState(usePathname());


    const activePage = usePathname();

    const suppliedProps = tabs.join(' ');

    // Change the active page styling when we change the page
    useEffect(() => {
        setPage(activePage)
        console.log("Page Changed!")
        console.log(activePage)
    }, [activePage])

    



    return <Box>
        <Typography>
            Current Page: {currentPage}
        </Typography>
        <Typography>
            Supplied props: {suppliedProps}
        </Typography>
        <Box>
            {tabs.map((tabName) => {return <Box>
                {
                    "/" + tabName === currentPage ?
                    <Link href={"/"+tabName}>
                        <motion.div 
                            initial={{opacity: 0.5}}
                            animate={{ opacity: 1, fontWeight:600, fontSize: '24px'}}
                            exit={{}}
                        >
                            {tabName} but awesome
                            

                        </motion.div>
                    </Link>
                    :
                    <Link href={"/"+tabName}>
                        <Typography>
                            {tabName}
                        </Typography>
                    </Link>
                }
                
            </Box>})}
        </Box>
        
    </Box>  


}