import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import checkAdmin from "../../checkAdmin"

function check(pathname) {
  return pathname.substring(pathname.lastIndexOf("/")+1)
}

export const PrivateRouteForAdmin = ({ component: Component, ...rest }) => (    
     <Route {...rest} render={props => (
      checkAdmin()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

export default PrivateRouteForAdmin