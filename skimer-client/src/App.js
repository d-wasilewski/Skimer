import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/pages/home"
import Login from "./components/pages/login"
import Subject from "./components/pages/subject"
import Timetable from "./components/pages/timetable"
import PrivateRoute from "./components/util/PrivateRoute"

import { Provider } from "react-redux"
import store from "./redux/store"
import { SET_AUTHENTICATED } from "./redux/types"
import { logoutUser, getUserData } from "./redux/actions/userActions"

import jwtDecode from "jwt-decode"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000/skimer-a5934/europe-west1/api"

const token = localStorage.FBIdToken
if (token) {
   const decodedToken = jwtDecode(token)
   if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser())
      console.log("przenosze")
      window.location.href = "/login"
   } else {
      store.dispatch({ type: SET_AUTHENTICATED })
      axios.defaults.headers.common["Authorization"] = token
      store.dispatch(getUserData())
   }
}

function App() {
   return (
      <Provider store={store}>
         <Router>
            <div className="App">
               <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute exact path="/timetable" component={Timetable} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute
                     exact
                     path="/subject/:sid"
                     component={Subject}
                  />
               </Switch>
            </div>
         </Router>
      </Provider>
   )
}

export default App
