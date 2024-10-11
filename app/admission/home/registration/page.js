import Coat from '@/Components/Coat'
import styles from './page.module.css'
import RedButton from '@/Components/RedButton'
import RegistrationForm from '@/Components/RegistartionForm'

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
        <div className={styles.coatContainer}>
          <Coat/>
        </div>
    </div>
    <div className={styles.redButtons}>
      <RedButton title='Back' link='/admission/home'/>
      <RedButton title='Continue' link='/admission/home/registration/payment'/>
    </div>
    </div>
  )
}

export default page