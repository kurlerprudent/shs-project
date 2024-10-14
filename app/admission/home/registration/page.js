import Coat from '@/Components/Coat'
import styles from './page.module.css'
import RedButton from '@/Components/RedButton'
import RegistrationForm from '@/Components/RegistartionForm'
import { Button } from '@mui/material'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blue, green, red } from '@mui/material/colors'

const page = () => {
  return (

    <div className={styles.mainContainer}>

   
    <div className={styles.container}>
        
     
        <div className={styles.containerOne}>
          <h2>Registration Form</h2>
        </div>
        <div className={styles.containerTwo}>
          <RegistrationForm/>
        </div>
       
    </div>
    <div className={styles.redButtons}>
      
      <Link href='/admission/home'>
           <Button variant="outlined" startIcon={<ArrowBackIcon sx={{fontSize:20}}/>} sx={{backgroundColor:green[700],color:'white'}}>
        Back
      </Button>
      </Link>

      <Link href='/admission/home/registration/payment'>
           <Button variant="outlined" endIcon={<ArrowForwardIcon sx={{fontSize:20}}/>} sx={{backgroundColor:green[700],color:'white'}}>
        Continue
      </Button>
      </Link>

    </div>
    </div>
  )
}

export default page