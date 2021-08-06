declare namespace xxrRouterProps {
  interface Router {
    path: string
    exact: true
    isAuth: true
    layout: string
    component: () => JSX.Element
  }
}

export default xxrRouterProps
