"use client"
import { DashboardLayout, PageContainer } from "@toolpad/core"
import { useTheme } from "@mui/material"

const layout = (props) => {
  const theme = useTheme()


  return (
    
        

   <DashboardLayout sx={{bgcolor: theme.palette.background.paper}}>
    <PageContainer>
        {props.children}
    </PageContainer>
   </DashboardLayout>
   
  )
}

export default layout