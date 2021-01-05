import React from "react"
import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"

import logo from "../../images/logo_alt.svg"

import style from "../../css/componentsStyle/layoutStyle/NavbarStyle"

const useStyles = createUseStyles(style)

export default function Navbar() {
   const classes = useStyles()

   return (
      <div className={classes.navbar} id="navbar">
         <Link to="/">
            <img src={logo} alt="Skimer" className="logo" />
         </Link>
         <h2>Schemer</h2>
         <ul>
            <li>
               <i className="far fa-bell" />
            </li>
            <Link to={"/login"}>
               <li>
                  <i className="far fa-sign-out-alt"></i>
               </li>
            </Link>

            <a href="#rightPanel">
               <li id="menuButton">
                  <i className="fas fa-bars" />
               </li>
            </a>
         </ul>
      </div>
   )
}
