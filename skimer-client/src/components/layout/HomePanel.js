import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import { useSelector, useDispatch } from "react-redux"
import "../../css/componentsStyle/calendar.css"

import ProgressAvatar from "../util/ProgressAvatar"

import style from "../../css/componentsStyle/layoutStyle/HomePanelStyle"

const useStyles = createUseStyles(style)

export default function HomePanel() {
   const classes = useStyles()
   const { user } = useSelector((state) => state.user)
   const username = user && user.auth ? user.auth.name : "not set"

   const name = username.split(" ")[0]
   const surname = username.split(" ")[1]

   console.log(user)

   return (
      <div className={classes.homePanel} id="rightPanel">
         <div className="userBox">
            <a href="# " id="closeMenu">
               <i className="fas fa-times" />
            </a>
            <h4 className="name">
               {name}
               <br />
               {surname}
            </h4>
            <ProgressAvatar />
         </div>

         <Calendar className="calendar" minDetail="month" />
      </div>
   )
}
