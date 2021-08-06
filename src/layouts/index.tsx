import { Helmet } from 'react-helmet'
import Cookies from 'js-cookie'

// Components
import FullLayout from './full'
import MainLayout from './main'
import xxlCoreLayoutProps from './model'

const CoreLayout = ({
  isAuth,
  layout,
  children
}: xxlCoreLayoutProps.PropTypes) => {
  let layoutComponent = <FullLayout>{children}</FullLayout>

  // route require authentication
  if (isAuth) {
    const userAuth = Cookies.get('user')

    // check user authentication (Login)
    if (userAuth) {
      if (layout === 'main') {
        layoutComponent = <MainLayout>{children}</MainLayout>
      } else if (layout === 'full') {
        layoutComponent = <FullLayout>{children}</FullLayout>
      }
    } else {
      window.location.replace('/login')
    }
  } else if (layout === 'main') {
    layoutComponent = <MainLayout>{children}</MainLayout>
  } else if (layout === 'full') {
    layoutComponent = <FullLayout>{children}</FullLayout>
  }
  return (
    <div>
      <Helmet>
        <title>Edit Title in Layout Folder</title>
      </Helmet>
      {layoutComponent}
    </div>
  )
}

export default CoreLayout
