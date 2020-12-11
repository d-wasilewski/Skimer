import React from "react"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import RightPanel from "./components/RightPanel"

import Home from "./pages/home"

function App() {
   return (
      <div className="App">
         <Sidebar />
         <RightPanel />
         <Navbar />
         <Home />
      </div>
   )
}

export default App
