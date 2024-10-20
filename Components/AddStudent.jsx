import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const AddStudent = () => {
  return (
    <div>
         <Container sx={{mt:{xs:'30%',md:'10%'},borderRadius:5,p:5}}>
      <Typography sx={{color:'#CED1D5',fontWeight:'800'}} textAlign='center' variant="h4" gutterBottom>
        Welcome to the Student Resource Hub!
      </Typography>
      <Typography textAlign='center' sx={{color:'#EFF3F5'}} variant="body1" paragraph>
        As you prepare for your transition to Senior High School (SHS), we’ve compiled essential resources to assist you in this exciting journey.
      </Typography>

      <Box my={4}>
        <Typography sx={{color:'#FEFEFE'}} variant="h5" gutterBottom>
          Resources for Students
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper  elevation={3} sx={{ padding: 2 }}>
              <Typography sx={{color:'#005A8D'}} variant="h6">Study Tips</Typography>
              <Typography variant="body2">
                1. Develop a study schedule that suits your learning style.
                <br />
                2. Use past exam papers for practice.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography sx={{color:'#005A8D'}} variant="h6">Subjects Offered</Typography>
              <Typography variant="body2">
                1. Science: Explore physics, chemistry, and biology.
                <br />
                2. Arts: Dive into literature, history, and visual arts.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography sx={{color:'#005A8D'}} variant="h6">Extracurricular Activities</Typography>
              <Typography variant="body2">
                Join clubs like the debate club, sports teams, and music groups to enhance your SHS experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box my={4}>
        <Typography sx={{color:'#FEFEFE'}} variant="h5" gutterBottom>
          Registration Process
        </Typography>
        <Typography sx={{color:'#CED1D5'}} variant="body1" paragraph>
          Follow these steps to register for SHS:
        </Typography>
        <Typography sx={{color:'#CED1D5'}} variant="body2">
          1. Gather necessary documents.
          <br />
          2. Complete the registration form.
          <br />
          3. Submit your application before the deadline.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography sx={{color:'#CED1D5'}} variant="h5" gutterBottom>
          Placement Information
        </Typography>
        <Typography sx={{color:'#CED1D5'}} variant="body1" paragraph>
          Understand how the placement process works and check your results here: 
          <a href="/placement-results"> Placement Results Link</a>
        </Typography>
      </Box>

      <Box my={4}>
        <Typography sx={{color:'#CED1D5'}} variant="h5" gutterBottom>
          FAQs
        </Typography>
        <Typography sx={{color:'#CED1D5'}} variant="body2">
          <strong>Q: How do I know which schools I can apply to?</strong>
          <br />
          A: You can check the list of available SHS on our website.
          <br />
          <strong>Q: What if I miss the registration deadline?</strong>
          <br />
          A: Contact your local education office for assistance.
        </Typography>
      </Box>
    </Container>
    </div>
  )
}

export default AddStudent