import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    useLocation,
    Link
} from 'react-router-dom'

import Posts from './posts/PostsScene'
import Post from './posts/components/PostView/PostView'
import App from './App'

{/* const privateRoute = ({ component: Component, subRoutes }) => (
    <Route 
      render={
        <Component {...props} children={subRoutes} />
      }
    />
    ); */}

{/* const wrapper = ({children}) => (
    <div style={{ height: '100%', width: '100%'}}>
      {children}
    </div>
) */}

export const getRoute = (routePath, params) => {
  console.log('routePath', routePath, 'params', params);
  
  let basePath = routePath
  Object.keys(params).forEach(key => {
    basePath = basePath.replace(`:${key}`, params[key])
  })
  return basePath
}

export const postSceneView = `/post/:postId`

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route exact path={postSceneView} component={Post} />
          </Switch>
        </Router>
    )
}

{/* export default(
    <Switch>
      <Route path='/' component={Posts} />
      <PrivateRote component={wrapper} subRoutes={(
        <div style={{ height: '100%', overflowY: 'auto'}}>
           <Route path="/post" component={Posts} />
        </div>
      )} />
    </Switch>
) */}