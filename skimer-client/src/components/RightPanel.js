import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import "../css/calendar.css"

import Avatar from "../images/unknown.png"

import style from "../css/rightPanelStyle.js"

const useStyles = createUseStyles(style)

export default function RightPanel() {
   const classes = useStyles()

   return (
      <div className={classes.rightPanel} id="rightPanel">
         <div className="userBox">
            <a href="# " id="closeMenu">
               <i className="fas fa-times" />
            </a>
            <h4>Michał Dzieciuchowicz</h4>
            <div className="avatar">
               <img src={Avatar} alt="avatar" />
            </div>

            <h5>Postęp</h5>
            <span>70%</span>
            <div className="progressBar">
               <div className="progress"></div>
            </div>
         </div>

         <Calendar className="calendar" />
      </div>
   )
}
