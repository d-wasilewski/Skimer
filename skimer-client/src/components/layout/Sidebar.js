import React from "react"
import { createUseStyles } from "react-jss"
import { NavLink } from "react-router-dom"

import style from "../../css/componentsStyle/layoutStyle/SidebarStyle"

const useStyles = createUseStyles(style)

export default function Sidebar() {
   const classes = useStyles()

   return (
      <div className={classes.sidebar}>
         <ul>
            <NavLink to={"/chat"} activeClassName="active">
               <li>
                  <i className="far fa-comment-alt"></i>
               </li>
            </NavLink>
            <a href="https://www.dropbox.com/pl/">
               <li>
                  <i className="fab fa-dropbox"></i>
               </li>
            </a>
         </ul>
      </div>
   )
}
