import { DashboardLayout, PageContainer } from "@toolpad/core"

const layout = (props) => {
  return (
    <div style={{backgroundColor:'grey'}}>
        

   <DashboardLayout>
    <PageContainer>
        {props.children}
    </PageContainer>
   </DashboardLayout>
   </div>
  )
}

export default layout