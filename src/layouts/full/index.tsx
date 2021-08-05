interface FullLayoutProps {
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

const FullLayout = ({ children }: FullLayoutProps) => {
  return (
    <div>
      {children}
      Full Layout
    </div>
  )
}

export default FullLayout
