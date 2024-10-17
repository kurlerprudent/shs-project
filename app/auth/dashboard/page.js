import SideBar from '@/Components/SideBar'
import styles from './page.module.css'
import Dashboard from '@/Components/Dashboard'

const page = () => {
  return (
    <div className={styles.container}>
       
        <SideBar/>
        <Dashboard/>
    </div>
  )
}

export default page