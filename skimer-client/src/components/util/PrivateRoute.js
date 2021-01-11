import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import { useSelector } from "react-redux"

export default function PrivateRoute({ component: Component, ...rest }) {
   const authenticated = useSelector((state) => state.user.authenticated)
   return (
      <Route
         {...rest}
         render={(props) =>
            authenticated ? <Component {...props} /> : <Redirect to="/login" />
         }
      />
   )
}
