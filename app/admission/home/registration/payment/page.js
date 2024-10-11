import Image  from 'next/image'
import styles from './page.module.css'
import momo from '../../../../../Images/momo.jpg'
import bank from '../../../../../Images/bamk.jpg'
import credit from '../../../../../Images/credit.jpg'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.paymentMethod}>
            <h2>Seclect a payment method</h2>

            <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                <Image style={{width:'100%',height:'100%',objectFit:'contain'}} src={momo} alt='momo'/>
                </div>
                <div className={styles.imageContainer}>
                <Image style={{width:'100%',height:'100%',objectFit:'contain'}} src={bank} alt='bank'/>
                </div>
                <div className={styles.imageContainer}>
                <Image style={{width:'100%',height:'100%',objectFit:'contain' }}alt='credit' src={credit}/>
                </div>
               
                
             
            </div>
        </div>
        <div className={styles.redButtons}></div>

    
    </div>
  )
}

export default page