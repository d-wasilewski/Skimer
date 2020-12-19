import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import "../../css/componentsStyle/calendar.css"

import ProgressAvatar from "../util/ProgressAvatar"

import style from "../../css/componentsStyle/layoutStyle/ChatPanelStyle"

const useStyles = createUseStyles(style)

export default function ChatPanel() {
   const classes = useStyles()

   return (
      <div className={classes.chatPanel} id="rightPanel">
         <div className="userBox">
            <a href="# " id="closeMenu">
               <i className="fas fa-times" />
            </a>
            <h4 className="name">
               Michał
               <br />
               Dzieciuchowicz2
            </h4>
            <ProgressAvatar />
         </div>

         <Calendar className="calendar" minDetail="month" />
      </div>
   )
}
