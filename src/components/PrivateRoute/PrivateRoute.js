import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Auth/Auth.js";

const PrivateRoute = ({ children, ...rest }) => {
  const currAuth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      currAuth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
