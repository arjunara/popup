// Style your elements here
import styled from 'styled-components'

export const NavContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  height: 70px;
  @media screen and (max-width: 767px) {
    height: 50px;
    width: 110px;
  }
`
export const HamburgerMenuButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NavContentContainer = styled.div`
  margin-top: 165px;
`
export const HomeNavContainer = styled.div`
  display: flex;
  align-items: center;
`
export const NavItemName = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  color: #616e7c;
  margin-left: 25px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
