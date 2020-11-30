import React from "react"
import { createUseStyles } from "react-jss"

import style from "../css/sidebarStyle.js"

const useStyles = createUseStyles(style)

export default function Sidebar() {
   const classes = useStyles()

   return (
      <div className={classes.sidebar}>
         <i className="fas fa-sticky-note logo"></i>
         <ul>
            <li className="active">
               <i className="far fa-comment-alt"></i>
            </li>
            <li>
               <i className="fas fa-inbox"></i>
            </li>
         </ul>
      </div>
   )
}
