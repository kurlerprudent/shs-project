"use client"

import styled from "@emotion/styled"
import { Person } from "@mui/icons-material"
import { Box, Grid, Input, Paper, Typography } from "@mui/material"
import SearchComponent from "./SearchComponent"
import MessageTable from "./MessageTable"


const Dashboard = () => {
        const BoxEdit = styled(Box)({
            width:50,
            height:50,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ededed',
            borderRadius:'50%'
        })

        const PaperEdit = styled(Paper)({
            width:'100%',
            minHeight:130,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            boxShadow:2
           
        })

        const textEdit = styled(Typography)({
            fontSize:28,
            fontWeight:'900',
            textAlign:'left',
            width:'100%',
            marginRight:10,
            
        })
   
  return (
    <Box sx={{display:'flex', flexDirection:'column',gap:3}}>
        
        <Typography sx={{fontSize:30,fontWeight:'600'}}>
            Welcome Mr. John
        </Typography>

        <Box  sx={{width:'100%'}}>

            <Grid container spacing={2}>
                <Grid item xs={6} md={3}> 
                    <PaperEdit>
                        <BoxEdit>
                            <Person/>
                        </BoxEdit>
                        <textEdit>
                            10
                        </textEdit>
                        <textEdit>
                            Students Placed
                        </textEdit>
                        
                    </PaperEdit>
                </Grid>

                <Grid item xs={6} md={3}> 
                <PaperEdit>
                    <BoxEdit>
                         <Person/>
                    </BoxEdit>
                    <textEdit>
                            10
                        </textEdit>
                        <textEdit>
                            Students Placed
                        </textEdit>
                </PaperEdit>
                </Grid>

                <Grid item xs={6} md={3}> 
                     <PaperEdit>
                        <BoxEdit>
                            <Person/>
                        </BoxEdit>
                        <textEdit>
                            10
                        </textEdit>
                        <textEdit>
                            Students Placed
                        </textEdit>
                     </PaperEdit>
                </Grid>

                <Grid item xs={6} md={3}> 
                  <PaperEdit>
                     <BoxEdit>
                        <Person/>
                     </BoxEdit>
                     <textEdit>
                            10
                        </textEdit>
                        <textEdit>
                            Students Placed
                        </textEdit>
                  </PaperEdit>
                </Grid>

            </Grid>
        </Box>

        <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
            <Box sx={{display:'flex',mt:4,justifyContent:'space-between'}}>
                <Typography sx={{fontSize:30,fontWeight:'600'}}>
                    Unread Messages
                </Typography>
                <Box sx={{backgroundColor:'#ededed',width:'30%'}}>
                    <SearchComponent/>
                </Box>
            </Box>

            <MessageTable/>
        </Box>
    </Box>
  )
}

export default Dashboard