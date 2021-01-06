import React from "react"
import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"

import style from "../../css/componentsStyle/layoutStyle/SidebarStyle"

const useStyles = createUseStyles(style)

export default function Sidebar() {
   const classes = useStyles()

   return (
      <div className={classes.sidebar}>
         <ul>
            {/* <NavLink to={"/chat"} activeClassName="active">
               <li>
                  <i className="far fa-comment-alt"></i>
               </li>
            </NavLink> */}
            <a
               href="https://www.dropbox.com/sh/pfcg0s8c8brui0x/AAA9I5DdQ9J51nCd6-f5_PmUa?dl=0"
               target="blank"
            >
               <li>
                  <i className="fab fa-dropbox"></i>
               </li>
            </a>
            <Link to={"/timetable"}>
               <li>
                  <i className="far fa-calendar"></i>
               </li>
            </Link>
         </ul>
      </div>
   )
}
