import * as CS from './Card.styles'

export const Card = ({ date, label, image, children, gridArea }) => {
  return (
    <CS.TiltCard style={{ gridArea: gridArea }}>
      <CS.CardWrapper>
        <CS.CardImage image={image} />
        <CS.CardText>
          <CS.CardDate>{date}</CS.CardDate>
          <h2>{label}</h2>
          <p>{children}</p>
        </CS.CardText>
      </CS.CardWrapper>
    </CS.TiltCard>
  )
}
