import styles from './Container.module.css'
import Wall from './Wall.jsx'
import Footer from './Footer.jsx'

function Container(){
  return(
    <>
    <div className={styles.WallOfFame}>
    <div className={styles.heading}>WALL OF FAME</div>
      <Wall />
    </div>
    </>
  )
}

export default Container