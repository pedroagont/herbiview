import { Container, Box, Typography, StepConnector } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHorse, faCat, faDog } from "@fortawesome/free-solid-svg-icons"


export default function Toxicity({ toxicities }) {

  function getObjectIcon(obj){
    if (obj.animal === "horse" && obj.toxic === true) return faHorse
    else if (obj.animal === "cat" && obj.toxic === true ) return faCat
    else if (obj.animal === "dog" && obj.toxic === true) return faDog
  }

  if (toxicities.filter(e => e.toxic === true).length > 0) {
    return (
      <Container>
        <Container align="center">

          <Typography paddingTop={5} variant="h4" margin={2} sx={{ textAlign: "center" }}>
              Animal Toxicity
          </Typography>

          <Typography
            variant="subtitle2"
            margin={2}
            sx={{ textAlign: "center", color: "text.secondary" }}
          >
            <i>It may be dangerous to the animals<br/>displayed below if consumed: </i>
          </Typography>

          <Box sx={{ flexDirection: "row", padding: 3}} align="center">
            <Typography component={'span'} variant="h1" sx={{ textAlign: "center" }}>


              {toxicities.map((obj, index) => (

      <FontAwesomeIcon icon={getObjectIcon(obj)} key={index} />


                
              ))}
            </Typography>
          </Box>

          <Box mb={5} />

        </Container>
      <Container>
        <StepConnector />
          <Typography variant="body1" paddingTop={3} sx={{ color: "text.secondary" }}>
            Clinical signs: </Typography>
          <Typography variant="body1" paddingBottom={4}>

            { toxicities[0].clinical_signs }

          </Typography>

      </Container>



    </Container>

    )
  }

  return (
  <Container sx={{ display: 'flex' }}>
  </Container>
  )
}