import Header from '../Header'

import {
  AppContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <AppContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Lost Your Way?</NotFoundHeading>
      <NotFoundDescription>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </NotFoundDescription>
    </AppContainer>
  </>
)

export default NotFound
