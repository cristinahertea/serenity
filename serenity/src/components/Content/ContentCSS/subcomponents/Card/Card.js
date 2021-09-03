import Tilt from 'react-vanilla-tilt'
import './Card.styles.css'

export const Card = ({ date, label, image, children, gridArea }) => {
  return (
    <Tilt className="card-tilt" style={{ gridArea: gridArea }}>
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%), url(${image})`,
          }}
        ></div>
        <div className="card-text">
          <span className="card-text-date">{date}</span>
          <h2>{label}</h2>
          <p>{children}</p>
        </div>
      </div>
    </Tilt>
  )
}
