import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from 'next/image';
// Landing page for the website!
export default function Home() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", maxWidth:"100%"}}>

      
      <Card sx={{width:'80%', height:'600px', backgrounDColor:'#f9eddf'}}>
        <Container sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Typography variant='h5' sx={{fontFamily:'Montserrat', paddingTop:"12px"}}>
            DEMO
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Container sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                  <Container sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Image 
                  src={"/images/meatball.png"} 
                  height={200}
                  width={200}
                  alt={"awesome"}/>
                  </Container>
                  
                <Typography variant="caption" align="center">
                  naur...
                </Typography>
                </Container>
              
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h3'>
                  Hello :3 !!
                </Typography>
                <Typography variant='body1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ornare lectus sit amet est placerat in egestas erat.

                </Typography>
                <Typography variant="subtitle2">
                  Yap yap yap yap 🤐
                </Typography>
              </Grid>

            </Grid>
            
          </Box>
        </Container>
      </Card>

    </Box>
  );
}
