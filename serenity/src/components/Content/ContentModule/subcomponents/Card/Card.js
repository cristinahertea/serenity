import Tilt from 'react-vanilla-tilt'
import styles from './Card.module.scss'

export const Card = ({ date, label, image, children, gridArea }) => {
  return (
    <Tilt className={styles.cardTilt} style={{ gridArea: gridArea }}>
      <div className={styles.card}>
        <div
          className={styles.cardImage}
          style={{
            backgroundImage: `linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%), url(${image})`,
          }}
        ></div>
        <div className={styles.cardText}>
          <span className={styles.cardTextDate}>{date}</span>
          <h2>{label}</h2>
          <p>{children}</p>
        </div>
      </div>
    </Tilt>
  )
}
