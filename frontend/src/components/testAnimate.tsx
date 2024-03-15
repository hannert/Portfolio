import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function TestExit() {
    return(
            <Card
                key = "Testing"
                component={motion.div}
                initial={{x:-300, opacity:0}}
                animate={{x:0, opacity:1}}
                exit={{x:-300, opacity:0}}
            >
                <Typography>Hello from the landing!</Typography>
                
            </Card>
    )
}