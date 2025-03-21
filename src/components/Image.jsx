import styles from './Image.module.css';
import airplane from '../assets/airplane.png'

function Image({ background }) {
  return (
    <div 
      className={styles.image_background} 
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={airplane} alt="Background" />
    </div>
  );
}

export default Image;
