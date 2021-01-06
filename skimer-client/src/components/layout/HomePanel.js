import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import { useSelector, useDispatch } from "react-redux"
import "../../css/componentsStyle/calendar.css"
import AvatarImage from "../../images/unknown.png"

import ProgressAvatar from "../util/ProgressAvatar"

import style from "../../css/componentsStyle/layoutStyle/HomePanelStyle"

const useStyles = createUseStyles(style)

export default function HomePanel() {
   const classes = useStyles()
   //const username = useSelector((state) => state.user.user.auth.name).split(" ")

   return (
      <div className={classes.homePanel} id="rightPanel">
         <div className="userBox">
            <a href="# " id="closeMenu">
               <i className="fas fa-times" />
            </a>
            <h4 className="name">
               Michał
               <br />
               Dzieciuchowicz
            </h4>
            <ProgressAvatar avatarImage={AvatarImage} progress="60" />
         </div>

         <Calendar className="calendar" minDetail="month" />
      </div>
   )
}
