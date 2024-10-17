"use client"

import TabSection from "./TabSecction"
import styles from './SideBar.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { Box } from "@mui/material";
const SideBar = () => {
    const [isOpen, setISOpen] = useState(false)

    const handleClick = ()=>{
        setISOpen(prevSate => !prevSate)
    }

  return (
    <>
     <Box  onClick={handleClick} sx={{display:{lg:'none',xs:'flex',justifyContent:'center',alignItems:'center',height:35,width:35,position:"fixed"},top:'8%',zIndex:100,':hover':{cursor:'pointer'}}} >
            <ArrowForwardIosIcon sx={{fontSize:30,color:'white'}}/>
        </Box>
        {
            isOpen && (
            <div className={styles.mobileSideBar}>
                <TabSection title='Admin'/>

                 </div>)
                    

        }
    <div className={styles.container}>
        <TabSection title='Admin'/>

       
    </div>
    </>
  )
}

export default SideBar