import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/pages/home"
import Chat from "./components/pages/chat"
import Login from "./components/pages/login"

function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/chat/:user" component={Chat} />
               <Route path="/login" component={Login} />
            </Switch>
         </div>
      </Router>
   )
}

export default App
