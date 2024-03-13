import Box from "@mui/material/Box";
import Link from "next/link";


// Landing page for the website!
export default function Home() {
  return (
    <Box>
      <Link href="/portfolio">Click on me to go to portfolio!</Link>
    </Box>
  );
}
