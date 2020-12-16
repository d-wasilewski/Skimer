import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"

function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/login" component={Login} />
            </Switch>
         </div>
      </Router>
   )
}

export default App
