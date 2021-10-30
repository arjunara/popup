// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'

import {
  WebsiteLogo,
  NavContent,
  HamburgerMenuButton,
  ModalContainer,
  HomeNavContainer,
  NavItemName,
  CloseButton,
  NavContentContainer,
} from './styledComponents'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <NavContent>
      <Link to="/" className="link-item">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <HamburgerMenuButton type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu size={30} />
          </HamburgerMenuButton>
        }
        className="popup-content"
      >
        {(close) => (
          <ModalContainer>
            <CloseButton type="button" onClick={() => close()}>
              <IoMdClose size={35} />
            </CloseButton>
            <NavContentContainer>
              <Link to="/" className="link-item">
                <HomeNavContainer>
                  <AiFillHome size={35} />
                  <NavItemName>Home</NavItemName>
                </HomeNavContainer>
              </Link>
              <Link to="/about" className="link-item">
                <HomeNavContainer>
                  <BsInfoCircleFill size={35} />
                  <NavItemName>About</NavItemName>
                </HomeNavContainer>
              </Link>
            </NavContentContainer>
          </ModalContainer>
        )}
      </Popup>
    </NavContent>
  </nav>
)

export default Header
