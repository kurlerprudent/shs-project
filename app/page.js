import Image from "next/image";
import styles from "./page.module.css";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Link from "next/link";
import Slider from "@/Components/Slider";




export default function Home() {
  return (
    <div className ={styles.pageContainer}>
      <div className={styles.blurCircles1}></div>
     
      <div className={styles.blurCircles3}></div>

      <div className={styles.container}>
      <div className={styles.leftContainer}>

      </div>
        <div className={styles.middleContainer}>
          <div className={styles.middleText}>
            <h1>shs</h1>
            <h4> The application is structured into various modules to cater to the needs of students,
            administrators, and parents. The first iteration focuses on three key features:
            </h4>
            
           
          </div>
          <div style={{display:'flex',width:'90%',flexDirection:'row-reverse'}} >
            <Link href='/auth'>
            <AutoAwesomeIcon sx={{color:'white',fontSize:40}}/>
            </Link>
          </div>
      
    </div>


      </div>

      <div className={styles.thirdSection}>
        <Link href='/admission'>
       

      <button className={styles.btn}>
        <span>Get started</span>
      </button>

        </Link>
        <div className={styles.slide}>
          <div style={{width:'100%',height:'100%'}}>
          <Slider/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
