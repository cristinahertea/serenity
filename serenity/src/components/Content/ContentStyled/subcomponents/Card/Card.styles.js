import Tilt from 'react-vanilla-tilt'
import styled from 'styled-components'

export const TiltCard = styled(Tilt)`
  width: min-content !important;
  background: none !important;
  margin: auto !important;
  padding: 0 !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  font-size: inherit !important;
  line-height: inherit !important;
  color: inherit !important;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 310px auto;
  grid-template-areas: 'image' 'text' 'stats';
  border-radius: 18px;
  background: #1d1d1d;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: 'Dancing Script', cursive;
  text-align: justify;
  cursor: pointer;
  width: min-content;
  height: min-content;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  border: 3px solid transparent;
  box-sizing: border-box;
`

export const CardImage = styled.div`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-image: linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%),
    url(${({ image }) => image});
`

export const CardText = styled.div`
  grid-area: text;
  margin: 25px;
  transform: translateZ(30px);

  & p {
    font-family: 'Fredoka One', cursive;
    color: grey;
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
  }

  & h2 {
    margin-top: 0px;
    font-size: 2.5rem;
  }
`

export const CardDate = styled.span`
  color: rgb(197, 108, 145);
  font-size: 1.25rem;
`
