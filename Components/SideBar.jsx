import TabSection from "./TabSecction"
import styles from './SideBar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
const SideBar = () => {
  return (
    <div className={styles.container}>
        <TabSection title='Admin'/>

        <div className={styles.menuIcon}>
            <MenuIcon sx={{fontSize:30,color:'black'}}/>
        </div>
    </div>
  )
}

export default SideBar