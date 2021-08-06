import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Routers
import xxrMainRouter from 'routers'

// Layout & Views
import Layout from 'layouts'
import NotFoundPage from 'views/NotFound'

// PWA
import * as serviceWorkerRegistration from 'serviceWorkerRegistration'
import reportWebVitals from 'reportWebVitals'

// i18n & Styles
import 'i18n'
import 'styles/Main.css'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading">
      <Router>
        <Switch>
          {xxrMainRouter.map(route => {
            return (
              <Route
                key={`router-${route.path.replaceAll('/', '-')}`}
                path={route.path}
                exact={route.exact}
                render={() => {
                  return (
                    <Layout isAuth={route.isAuth} layout={route.layout}>
                      <route.component />
                    </Layout>
                  )
                }}
              />
            )
          })}

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
