import React from "react"
import { createUseStyles } from "react-jss"

import Avatar from "../components/Avatar"

import style from "../css/componentsStyle/UpcomingEventStyle"

const useStyles = createUseStyles(style)

export default function UpcomingEvent() {
   const classes = useStyles()
   return (
      <div className={classes.UpcomingEvent}>
         <div>
            <span className="day">WT</span>
            <span className="date">15.12</span>
         </div>
         <div>
            <h5>Komputerowa Analiza Danych</h5>
            <span>Zrobić zadanie 3</span>
         </div>
         <div>
            <Avatar size="30" />
         </div>
         <div>
            <i className="far fa-pencil-alt"></i>
            <i className="far fa-check-circle"></i>
         </div>
      </div>
   )
}
