import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function check(pathname) {
  return pathname.substring(pathname.lastIndexOf("/")+1)
}

export const PrivateRouteForUser = ({ component: Component, ...rest }) => (    
     <Route {...rest} render={props => (
      localStorage.getItem('username') === check(props.location.pathname)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

export default PrivateRouteForUser