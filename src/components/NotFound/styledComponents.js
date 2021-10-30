// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
`
export const NotFoundImage = styled.img`
  height: 423px;
  width: 432px;
  @media screen and (max-width: 767px) {
    height: 320px;
    width: 320px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 600;
  color: #616e7c;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 38px;
  }
`
export const NotFoundDescription = styled.p`
font-family: 'Roboto';
  font-size: 28px;
  font-weight: 400;
  color: #616e7c;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    text-align: center;
    width: 80%;
`
