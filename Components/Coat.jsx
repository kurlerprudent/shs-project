import Styles from './Coat.module.css';
import Image from 'next/image';
import image1 from "../Images/coat.jpg";

const Coat = () => {
  return (
    <div className={Styles.rightContainer}>
    <div className={Styles.imageContainer}>
      <Image
        src={image1}
        alt="hero"
        style={{ width: "100%", height: "100%",backgroundColor:"inherit" }}
      />
    </div>
    <div className={Styles.title1}>
      <h4 >
      Ministry of Education 
      Ghana educ. Service 
      Buyget ICT center
      </h4>
    </div>
  </div>
  )
}

export default Coat