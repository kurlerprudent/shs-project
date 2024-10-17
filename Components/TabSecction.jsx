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
          

        <Link href='/auth/add_student'>
          <Tab icon={<HowToRegIcon sx={{fontSize:20}}/>} title='Add Student'/>
          </Link>
            
            <Link href='/auth/view_student'>
            <Tab icon={<SupervisorAccountIcon sx={{fontSize:20}}/>} title='View Student'/>
            </Link>
            
            <Link href='/auth/add_news'>
            <Tab icon={<PersonIcon sx={{fontSize:20}}/>} title='Add News'/>
            </Link>

            <Link href='/auth/settings'>
            <Tab icon={<Settings sx={{fontSize:20}}/>} title='Settings'/>
            </Link>
        </div>
    </div>
  )
}

export default TabSection