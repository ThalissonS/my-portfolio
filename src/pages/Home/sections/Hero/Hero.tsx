import { Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Eu.jpeg"
import { Grid } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const StyledHero = styled("div")(()=>({
        backgroundColor: "black",
        height: "100vh",
        
    }))

const StyledImg = styled("img")(()=>({
        width: "100%",
        borderRadius: "50%",
    }))

const Hero = () => {

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                  <StyledImg src={Avatar} />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                  <Typography color="primary" variant="h1" textAlign="center">Thalisson Pereira</Typography>
                  <Typography color="primary" variant="h2" textAlign="center">I'm a Software Developer</Typography>
                  <Grid container display={'flex'} justifyContent={"center"}>
                      <Grid size={{ xs: 12, md: 4 }} display={'flex'} justifyContent={"center"}>
                          <button>
                              <DownloadIcon /> Download CV
                          </button>
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }} display={'flex'} justifyContent={"center"}>
                          <button>
                              <EmailIcon /> Contact Me
                          </button>
                      </Grid>
                  </Grid>
                  
                  
              </Grid>
            </Grid>
        </Container>  
       
      </StyledHero>
    </>
  )
}

export default Hero
