import Link from 'next/link'
import styles from './YellowButtons.module.css'

const YellowButtons = ({link, title}) => {
  return (
    <div className={styles.buttonContainer}>
        <Link href={link}>
        <button>{title}</button>
        </Link>
    </div>
  )
}

export default YellowButtons