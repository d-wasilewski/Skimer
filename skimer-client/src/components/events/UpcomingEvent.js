import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createUseStyles } from "react-jss"

import Avatar from "../util/Avatar"

import style from "../../css/componentsStyle/eventsStyle/UpcomingEventStyle"

const useStyles = createUseStyles(style)

export default function UpcomingEvent(props) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const subjects = useSelector((state) => state.data.subjects)
   const users = useSelector((state) => state.data.users)

   const { event } = props
   //console.log(user.name)

   useEffect(() => {
      let user = users.find((user) => user.handle == event.author)
      event.authorName = user.name
   }, [])

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
         <div className="avatar">
            <Avatar size="56" />
         </div>
         <div className="author">
            <h5>{event.author}</h5>
            <span>Utworzono: 17.12.2020 15:35</span>
         </div>
         <div className="icons">
            <i className="far fa-pencil-alt"></i>
            <i className="fas fa-check"></i>
         </div>
      </div>
   )
}
