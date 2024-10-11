import styles from './RedButton.module.css'
import Link from 'next/link'
const RedButton = ({title,link}) => {
  return (
    <div>
            <div className={styles.buttonContainer}>
           <Link href={link}> <button type='submit'>{title}</button></Link>
      </div>
    </div>
  )
}

export default RedButton