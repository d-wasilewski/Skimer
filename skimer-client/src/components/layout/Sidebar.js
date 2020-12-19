import React from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/layoutStyle/SidebarStyle"

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
               <i className="fab fa-dropbox"></i>
            </li>
         </ul>
      </div>
   )
}
