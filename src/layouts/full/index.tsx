import xxlFullLayoutProps from 'layouts/Full/types'

const FullLayout = ({ children }: xxlFullLayoutProps.PropTypes) => {
  return (
    <div>
      {children}
      Full Layout
    </div>
  )
}

export default FullLayout
