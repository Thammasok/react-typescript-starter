declare namespace xxlCoreLayoutProps {
  interface ChildrenProps {
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

  interface PropTypes {
    isAuth: boolean
    layout: string
    children: ChildrenProps.children
  }
}

export default xxlCoreLayoutProps
