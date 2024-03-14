import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Link from "next/link";

export function Navgroup() {
  return (
    <Container
      sx={{
        paddingTop: "10vmax",
        paddingBottom: "2vmax",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ButtonGroup variant="text">
        <Button
          disableRipple
          sx={{
            textTransform: "none",
            paddingLeft: "24px",
            paddingRight: "24px",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          <Link href="/about">About</Link>
        </Button>
        <Button
          disableRipple
          sx={{
            textTransform: "none",
            paddingLeft: "24px",
            paddingRight: "24px",
            fontSize: "24px",
          }}
        >
          <Link href="/portfolio">Portfolio</Link>
        </Button>
        <Button
          disableRipple
          sx={{
            textTransform: "none",
            paddingLeft: "24px",
            paddingRight: "24px",
            fontSize: "24px",
          }}
        >
          <Link href="/contact">Contact</Link>
        </Button>
      </ButtonGroup>
    </Container>
  );
}
