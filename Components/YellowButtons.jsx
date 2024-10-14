import Link from 'next/link'
import styles from './YellowButtons.module.css'
import { Button } from '@mui/material'
import {  yellow } from '@mui/material/colors';

const YellowButtons = ({link, title,icon}) => {
  return (
    <div className={styles.buttonContainer}>
        <Link href={link}>
        <Button disableRipple variant='contained' startIcon={icon} sx={{fontSize:16,bgcolor:yellow[400],width:'100%',fontWeight:'600',color:'white',height:50}}>{title}</Button>
        </Link>
    </div>
  )
}

export default YellowButtons