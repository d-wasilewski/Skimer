import React from "react"
import { createUseStyles } from "react-jss"
import logo from "../images/logo_alt.svg"

import style from "../css/components/navbarStyle"

const useStyles = createUseStyles(style)

export default function Navbar() {
   const classes = useStyles()

   return (
      <div className={classes.navbar} id="navbar">
         <img src={logo} alt="Skimer" className="logo" />
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
