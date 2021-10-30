// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const PageLargeImage = styled.img`
  width: 100%;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const PageSmallImage = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
