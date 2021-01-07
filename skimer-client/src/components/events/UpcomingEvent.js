import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createUseStyles } from "react-jss"
import dayjs from "dayjs"
import "dayjs/locale/pl"

import Avatar from "../util/Avatar"

import style from "../../css/componentsStyle/eventsStyle/UpcomingEventStyle"

import { deleteEvent } from "../../redux/actions/dataActions"

const useStyles = createUseStyles(style)

export default function UpcomingEvent({ event, handleEventDelete }) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const subjects = useSelector((state) => state.data.subjects)
   const users = useSelector((state) => state.data.users)
   dayjs.locale("pl")

   // console.log(subjects)
   // console.log(event)

   let user = users.find((user) => user.handle == event.author)
   // console.log(user)
   // let xD = user.name
   const username = user && user.name ? user.name : "not set"
   console.log(user)

   const createdAt = event && event.createdAt ? event.createdAt : new Date()
   const deadline = event && event.deadline ? event.deadline : new Date()
   let createdAtDate = dayjs(createdAt).format("DD-MM-YYYY H:m")
   let deadlineDateName = dayjs(deadline).format("dd")
   let deadlineDate = dayjs(deadline).format("DD.MM") //zmienic czas
   // console.log(event.createdAt)
   // console.log(event.deadline)

   return (
      <div className={classes.UpcomingEvent}>
         <div className="date">
            <span>{deadlineDateName}</span>
            <span>{deadlineDate}</span>
         </div>
         <div className="subject">
            <h5>Komputerowa Analiza Danych</h5>
            <span>{event.description}</span>
         </div>
         <div className="avatar">
            <Avatar size="56" avatarImage={event.authorImage} />
         </div>
         <div className="author">
            <h5>{username}</h5>
            <span>Utworzono: {createdAtDate}</span>
         </div>
         <div className="icons">
            <i className="fas fa-check"></i>
            <div
               onClick={() => handleEventDelete()}
               onKeyDown={(e) => console.log()}
               role="button"
               tabIndex={0}
            >
               <i className="fas fa-trash-alt"></i>
            </div>
         </div>
      </div>
   )
}
