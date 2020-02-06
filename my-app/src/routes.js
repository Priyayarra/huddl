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
import User from './posts/components/UserView/UserView'

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

export const postsRoute = '/'
export const postSceneView = `/post/:postId`
export const userSceneView = `/user/:userId`

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path={postsRoute} component={Posts} />
            <Route exact path={postSceneView} component={Post} />
            <Route exact path={userSceneView} component={User} />
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