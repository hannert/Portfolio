import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function AboutCard() {
  return (
    <Card
      sx={{
        backgrounDColor: "#f9eddf",
        padding: "12px 12px 12px 12px",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: "Montserrat", paddingTop: "12px" }}
      >
        Hullo
      </Typography>

      <Divider></Divider>
      <Typography
        variant="body1"
        sx={{
          marginTop: "8px",
        }}
      >
        hola, my name is mini :D
      </Typography>
    </Card>
  );
}
