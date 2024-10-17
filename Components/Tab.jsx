import  styles from './Tab.module.css'


const Tab = ({icon,title}) => {
  return (
    <div className={styles.container}>

        <div style={{marginTop:6}}>{icon}</div>
        <p>{title}</p>
    </div>
  )
}

export default Tab