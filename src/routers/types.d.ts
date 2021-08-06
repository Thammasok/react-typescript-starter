declare namespace xxrRouterProps {
  interface PropTypes {
    path: string
    exact: boolean
    isAuth: boolean
    layout: string
    component: () => JSX.Element
  }
}

export default xxrRouterProps
