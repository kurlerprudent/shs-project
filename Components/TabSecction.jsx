import Tab from './Tab'
import styles from './TabSection.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';

import Link from 'next/link';
import { Settings } from '@mui/icons-material';


const TabSection = ({title}) => {
  return (
    <div className={styles.container}>
        <h3>{title}</h3>
        <div>
          <Link href='/auth/dashboard'>
          <Tab icon={<DashboardIcon sx={{fontSize:20}}/>} title='Dashboard'/>
          </Link>
          

        
          <Tab icon={<HowToRegIcon sx={{fontSize:20}}/>} title='Add Student'/>
        
            <Tab icon={<SupervisorAccountIcon sx={{fontSize:20}}/>} title='View Student'/>
          
            
            <Tab icon={<PersonIcon sx={{fontSize:20}}/>} title='Add News'/>
         

            
            <Tab icon={<Settings sx={{fontSize:20}}/>} title='Settings'/>
        
        </div>
    </div>
  )
}

export default TabSection