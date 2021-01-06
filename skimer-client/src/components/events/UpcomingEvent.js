import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createUseStyles } from "react-jss"
import dayjs from "dayjs"
import "dayjs/locale/pl"

import Avatar from "../util/Avatar"

import style from "../../css/componentsStyle/eventsStyle/UpcomingEventStyle"

import { deleteEvent } from "../../redux/actions/dataActions"

const useStyles = createUseStyles(style)

export default function UpcomingEvent(props) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const subjects = useSelector((state) => state.data.subjects)
   const users = useSelector((state) => state.data.users)

   const { event } = props
   console.log(subjects)
   console.log(event)

   useEffect(() => {}, [])

   let user = users.find((user) => user.handle == event.author)
   console.log(user)
   // let xD = user.name

   dayjs.locale("pl")
   let createdAtDate = dayjs(event.createdAt).format("DD-MM-YYYY H:m")
   let deadlineDateName = dayjs(new Date()).format("dd")
   let deadlineDate = dayjs(new Date()).format("DD.MM") //zmienic czas
   console.log(event.createdAt)
   console.log(event.deadline)

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
            {/* <h5>{xD}</h5> */}
            <span>Utworzono: {createdAtDate}</span>
         </div>
         <div className="icons">
            <i className="fas fa-check"></i>
            <div
               onClick={dispatch(deleteEvent(event.eventId))}
               onKeyDown={(e) => console.log("JEBAC DISA SKURWYSYNA")}
               role="button"
               tabIndex={0}
            >
               <i className="fas fa-trash-alt"></i>
            </div>
         </div>
      </div>
   )
}
