interface MainLayoutProps {
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      Header
      {children}
      Main Layout
    </div>
  )
}

export default MainLayout
