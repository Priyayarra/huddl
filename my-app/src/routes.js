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
import Post from './posts/components/Post'
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

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path='/post/:postId'>
              <Post />
            </Route>
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