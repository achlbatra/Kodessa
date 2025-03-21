import styles from './Footer.module.css'
import kodessa from '../assets/kodessa.png'
import kiit from '../assets/kiit.png'
import girlswhocode from '../assets/girlswhocode.png'

function Footer(){
  return(
    <>
    <div className={styles.footerbox}>
      <div className={styles.footer1}>
      <h6 className={styles.text1} >Visit our Women-In-Tech Society at KIIT University,Odisha </h6>
      <h6 className={styles.text2}>  Empowering women,building tech leaders of tomorrow in our college</h6>
      </div>
      <div className={styles.footer1}>
        <h6 className={styles.text1}>Contact Us</h6>
        <h6 className={styles.text2}>Email: kodessa@kiit.ac.in</h6>
        <h6 className={styles.text2}>Phone: +91 XXXXXXXXXX</h6>
      </div>
    </div>
    <div className={styles.logos}>
        <img src={kodessa} className={styles.kodessa}></img>
        <img src={kiit} className={styles.kiit}></img>
        <img src={girlswhocode} className={styles.girlswhocode}></img>
    </div>
    </>
  )
}

export default Footer