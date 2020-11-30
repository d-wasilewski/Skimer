import React from "react"
import { createUseStyles } from "react-jss"

import style from "../css/navbarStyle.js"

const useStyles = createUseStyles(style)

export default function Navbar() {
   const classes = useStyles()

   return (
      <div className={classes.navbar} id="navbar">
         <h2>Skimer</h2>
         <ul>
            <li>
               <i className="far fa-bell" />
            </li>

            <a href="#rightPanel">
               <li id="menuButton">
                  <i className="fas fa-bars" />
               </li>
            </a>
         </ul>
      </div>
   )
}
