"use client"

import { Box, Grid, Paper } from '@mui/material'
import styles from './Dashboard.module.css'
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,

 } from 'chart.js'

 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
 )

const Dashboard = () => {
   const options1 = {
        responsive:true,
        plugins: {
            title: {
                display: true,
                text: 'Students Placed',
                font: {
                    size: 20,
                }
            },
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
  const  data1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Students',
                data: [60, 57, 38, 200, 80, 45, 30],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 4,
            },
           
        ]
    }

    const options2 = {
        responsive:true,
        plugins: {
            title: {
                display: true,
                text: 'Students Admmited',
                font: {
                    size: 20,
                }
            },
            legend: {
                display: true,
                position: 'top',
            }
        }
    }

    const data2 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Students',
                data: [100, 57, 38, 30, 20, 45, 30],
                borderColor: ['rgba(255, 0, 132, 1)'],
                borderWidth: 4,
            },
           
        ]
    }


  return (
    <div className={styles.container}>
        <h2 style={{marginLeft:30}}>Dashboard</h2>

        <Box sx={{ width:'100%',mt:2,pl:{xs:'5%'}}}>
        <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6} >
          <Paper>
            <Line options={options1} data={data1}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper>
            <Line options={options2} data={data2}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',minHeight:250}}>
            <h2>Total: number</h2>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',minHeight:250}}>
            <h2>Total: number</h2>
          </Paper>
        </Grid>
      </Grid>
        </Box>
    </div>
  )
}

export default Dashboard