// Write your code here
import Header from '../Header'

import {AppContainer, PageLargeImage, PageSmallImage} from './styledComponents'

const Home = () => (
  <>
    <Header />
    <AppContainer>
      <PageLargeImage
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
      <PageSmallImage
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </AppContainer>
  </>
)

export default Home
