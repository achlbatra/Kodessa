import styles from './Wall.module.css'
import Image from './Image.jsx'
import greenBg from '../assets/green_bg.png';
import pinkBg from '../assets/pink_bg.png'
import redBg from '../assets/red_bg.png'

function Wall(){
  return (
  <>
    <div className={styles.subcontainer}>
      <Image background={greenBg} />
      <Image background={pinkBg} />
      <Image background={redBg} />
    </div>
  </>
  )
}

export default Wall