import React from "react"
import { createUseStyles } from "react-jss"

import style from "../css/components/sidebarStyle"

const useStyles = createUseStyles(style)

export default function Sidebar() {
   const classes = useStyles()

   return (
      <div className={classes.sidebar}>
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
