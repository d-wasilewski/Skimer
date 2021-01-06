import React from "react"
import { useDispatch } from "react-redux"
import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"

import logo from "../../images/logo_alt.svg"
import "../../1351.js"

import style from "../../css/componentsStyle/layoutStyle/NavbarStyle"
import { logoutUser } from "../../redux/actions/userActions"

const useStyles = createUseStyles(style)

export default function Navbar() {
   const classes = useStyles()
   const dispatch = useDispatch()

   return (
      <div className={classes.navbar} id="navbar">
         <Link to="/">
            <img src={logo} alt="Skimer" className="logo" />
         </Link>
         <h2>Skimer</h2>
         <ul>
            <Link
               to={"/login"}
               // onClick={dispatch(logoutUser())}
            >
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
