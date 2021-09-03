import styled, { keyframes } from 'styled-components'

const easeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
`

export const Content = styled.div`
  animation: ${easeIn} 1s ease-in;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  padding: 100px;
  grid-gap: 40px;
  max-width: 1200px;
  margin: auto;
  grid-template-areas:
    'article1  article1  card1'
    'card2     article2  article2'
    'article3  article3  card3';
`
