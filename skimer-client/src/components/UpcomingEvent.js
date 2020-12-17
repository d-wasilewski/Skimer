import React from "react"
import { createUseStyles } from "react-jss"

import Avatar from "../components/Avatar"

import style from "../css/componentsStyle/UpcomingEventStyle"

const useStyles = createUseStyles(style)

export default function UpcomingEvent() {
   const classes = useStyles()
   return (
      <div className={classes.UpcomingEvent}>
         <div className="date">
            <span>WT</span>
            <span>15.12</span>
         </div>
         <div className="subject">
            <h5>Komputerowa Analiza Danych</h5>
            <span>Zrobić zadanie 3</span>
         </div>
         <div className="author">
            <Avatar size="56" />
            <h5>Damian Wasilewski</h5>
            <span>Utworzono: 17.12.2020 15:35</span>
         </div>
         <div className="icons">
            <i className="far fa-pencil-alt"></i>
            <i className="fas fa-check"></i>
         </div>
      </div>
   )
}
