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

   //let user = users.find((user) => user.handle == event.author)

   dayjs.locale("pl")
   let deadlineDateName = dayjs(new Date()).format("dd")
   let deadlineDate = dayjs(new Date()).format("DD.MM") //zmienic czas
   let createdAtDate = event
      ? dayjs(event.createdAt).format("DD-MM-YYYY H:m")
      : ""
   let description = event ? event.description : ""
   let authorImage = event ? event.authorImage : ""

   return (
      <div className={classes.UpcomingEvent}>
         <div className="date">
            <span>{deadlineDateName}</span>
            <span>{deadlineDate}</span>
         </div>
         <div className="subject">
            <h5>Komputerowa Analiza Danych</h5>
            <span>{description}</span>
         </div>
         <div className="avatar">
            <Avatar size="56" avatarImage={authorImage} />
         </div>
         <div className="author">
            {/* <h5>{xD}</h5> */}
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
