declare namespace xxroRouterProps {
  interface PropTypes {
    path: string
    exact: boolean
    isAuth: boolean
    layout: string
    component: () => JSX.Element
  }
}

export default xxroRouterProps
