import Image from 'next/image'
import Styles from './page.module.css'
import Link from 'next/link'
import { CommentOutlined, Style } from '@mui/icons-material'
import { ThumbUp } from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'

import image1 from      '../../public/Images/school2.jpg'
import image2 from      '../../public/Images/school3.jpg'
import image3 from      '../../public/Images/schoolb.jpg'
import image4 from      '../../public/Images/schoolc.jpg'
import image5 from     '../../public/Images/schoold.jpg'
import { Box, Grid, Paper,Typography } from '@mui/material'


const Page = () => {

    const newsData = [
        {id:1, title:'Title', description:'Get all latest news here....', dislikes:0, comments:0, likes:0, image:image1},
    
        {id:2, title:'Title', description:'Get all latest news here....', dislikes:0, comments:0, likes:0, image:image2},
    
        {id:3, title:'Title', description:'Get all latest news here....', dislikes:0, comments:0, likes:0, image:image3},
    
        {id:4, title:'Title', description:'Get all latest news here....', dislikes:0, comments:0, likes:0,  image:image4},
    
        {id:5, title:'Title', description:'Get all latest news here....', dislikes:0, comments:0, likes:0,  image:image5},
      ]

  return (

    <> 
    <Box sx={{mt:{xs:'30%',md:'10%',p:0,width:'100%'}}}>

      <Box>
      <Typography textAlign='center' sx={{color:'#FEFEFE'}}variant="h5" gutterBottom>
          Latest News
        </Typography>
        
          <Typography mb={4} textAlign='center'  sx={{color:'#FEeEFE'}} variant="body1">
            Stay informed with the latest updates regarding Senior High Schools in Ghana.
         
          
          </Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, flexWrap:'wrap',width:'100%',px:{xs:0,md:'8%'},gap:2, alignItems:'center'}}>

     
     {
        newsData && newsData.map((data)=>(
        <Link key={data.id} href={`/news/${data.id}`}>
        <div  className={Styles.container}>
            <div className={Styles.imageContainer}>
                <Image 
                src={data.image}
                alt='image'
                style={{width:'100%',height:'100%', objectFit:'cover'}}
                 />
            </div>
            <div className={Styles.content}>
                <h3 className={Styles.title}>{data.title}</h3>
                <p className={Styles.description}>{data.description}</p>
            </div>
            <div className={Styles.socialMediaIcons}>
                <div className={Styles.iconAndValue}>
                    {data.dislikes}
                    <ThumbDown sx={{fontSize:17}}/>
                    {data.likes}
                    <ThumbUp sx={{fontSize:17}}/>
                </div>
                <div className={Styles.iconAndValue}>
                    {data.comments}
                <CommentOutlined sx={{fontSize:17}}/>
                </div>
                
            </div>
        </div>
        </Link>
        ))}

    </Box>

   <Box sx={{px:3}}>
       
    <Box sx={{color:'#FEFEFE'}} my={4}>
        <Typography variant="h5" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            
              <Typography variant="h6">Open Day at Teshie SHS</Typography>
              <Typography variant="body2">Join us on March 15th to learn more about our programs.</Typography>
           
          </Grid>
          <Grid item xs={12} md={6}>
      
              <Typography variant="h6">Student Orientation</Typography>
              <Typography variant="body2">Orientation for new students will be held on April 1st.</Typography>
          
          </Grid>
        </Grid>
      </Box>

      <Box  sx={{color:'#FEFEFE'}} my={4}>
        <Typography variant="h5" gutterBottom>
          Student Spotlights
        </Typography>
     
          <Typography variant="body1">
            Meet our featured students who excelled in their SHS journey:
          </Typography>
          <Typography variant="body2">
            <strong>Jane Doe:</strong> A recent graduate who achieved top marks in her final exams.
          </Typography>
          <Typography variant="body2">
            <strong>John Smith:</strong> A talented athlete who represented SHS in national competitions.
            </Typography>
      </Box>

      <Box  sx={{color:'#FEFEFE'}} my={4}>
        <Typography variant="h5" gutterBottom>
          Community Engagement
        </Typography>
        <Typography variant="body1">
          Get involved with local initiatives and make a difference in your community!
        </Typography>
      </Box>
      </Box>     

</Box>
    </>
  )
}

export default Page