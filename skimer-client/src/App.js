import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RightPanel from "./components/RightPanel";

function App() {
   return (
      <div className="App">
         <Sidebar />
         <RightPanel />
         <Navbar />
      </div>
   );
}

export default App;
