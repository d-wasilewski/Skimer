import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import "../css/componentsStyle/calendar.css"

import ProgressAvatar from "./ProgressAvatar"

import style from "../css/componentsStyle/RightPanelStyle"

const useStyles = createUseStyles(style)

export default function RightPanel() {
   const classes = useStyles()

   return (
      <div className={classes.rightPanel} id="rightPanel">
         <div className="userBox">
            <a href="# " id="closeMenu">
               <i className="fas fa-times" />
            </a>
            <h4 className="name">
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
