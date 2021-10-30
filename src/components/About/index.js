// Write your code here
import Header from '../Header'

import {AppContainer, PageLargeImage, PageSmallImage} from './styledComponents'

const About = () => (
  <>
    <Header />
    <AppContainer>
      <PageLargeImage
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
      <PageSmallImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </AppContainer>
  </>
)

export default About
