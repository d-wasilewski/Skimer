import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import "../css/components/calendar.css"

import ProgressAvatar from "../components/progressAvatar"

import style from "../css/components/rightPanelStyle"

const useStyles = createUseStyles(style)

export default function RightPanel() {
   const classes = useStyles()

   return (
      <div className={classes.rightPanel} id="rightPanel">
         <div className="userBox">
            <a href="# " id="closeMenu">
               <i className="fas fa-times" />
            </a>
            <h4>
               Michał
               <br />
               Dzieciuchowicz
            </h4>
            <ProgressAvatar />
         </div>

         <Calendar className="calendar" minDetail="month" />
      </div>
   )
}
