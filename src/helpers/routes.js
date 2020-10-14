import React from 'react';
import {Route,Redirect } from 'react-router-dom';


//if they are not a user render the children
//if they are a user redirect them to loggedInPath
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          if (!user) {
            return children;
          }
  
          if (user) {
            return (
              <Redirect
                to={{
                  pathname: loggedInPath,
                }}
              />
            );
          }
          return null;
        }}
      />
    );
  }
//if they are logged in return them the children which is the browse page
//if they are trying to access the browse page without getting logged in redirect them to signin page
  export function ProtectedRoute({ user, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return children;
          }
  
          if (!user) {
            return (
              <Redirect
                to={{
                  pathname: 'signin',
                  state: { from: location },
                }}
              />
              );
          }
  
          return null;
        }}
      />
    );
  }