import xxlMainLayoutProps from './model'

const MainLayout = ({ children }: xxlMainLayoutProps.PropTypes) => {
  return (
    <div>
      Header
      {children}
      Main Layout
    </div>
  )
}

export default MainLayout
