import React from "react"
import { createUseStyles } from "react-jss"
import Calendar from "react-calendar"
import { useSelector, useDispatch } from "react-redux"
import "../../css/componentsStyle/calendar.css"
import style from "../../css/componentsStyle/layoutStyle/HomePanelStyle"
import ProgressAvatar from "../util/ProgressAvatar"

const useStyles = createUseStyles(style)

export default function HomePanel() {
   const classes = useStyles()
   const { user } = useSelector((state) => state.user)
   let events = []
   events = useSelector((state) => state.data.events)
   const username = user && user.auth ? user.auth.name : "loading..."
   const avatarImage = user && user.auth ? user.auth.imageUrl : ""

   let finished = []
   finished = user && user.finished ? user.finished : []
   let progress =
      finished && events
         ? ((finished.length / events.length) * 100).toString().split(".")[0]
         : 100
   progress = isNaN(progress) ? 100 : progress

   const name = username.split(" ")[0]
   const surname = username.split(" ")[1]

   let initials = name && surname ? name[0] + surname[0] : ""

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
            <ProgressAvatar
               avatarImage={avatarImage}
               progress={progress}
               initials={initials}
            />
         </div>

         <Calendar className="calendar" minDetail="month" />
      </div>
   )
}
