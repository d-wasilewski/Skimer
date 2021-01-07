import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createUseStyles } from "react-jss"
import dayjs from "dayjs"
import "dayjs/locale/pl"

import Avatar from "../util/Avatar"

import style from "../../css/componentsStyle/eventsStyle/UpcomingEventStyle"

const useStyles = createUseStyles(style)

export default function UpcomingEvent({
   event,
   handleEventDelete,
   finished,
   handleSetUnfinished,
   handleSetFinished,
}) {
   const classes = useStyles()

   const users = useSelector((state) => state.data.users)
   const currentUser = useSelector((state) => state.user)
   const subjects = useSelector((state) => state.data.subjects)

   const currentUserHandle =
      currentUser && currentUser.user ? currentUser.user.auth.handle : "xd"
   const authenticated =
      currentUser && currentUser.authenticated ? currentUser.authenticated : ""
   dayjs.locale("pl")

   let user = users.find((user) => user.handle == event.author)
   const username = user && user.name ? user.name : "Ładowanie..."

   const createdAt = event && event.createdAt ? event.createdAt : new Date()
   const deadline = event && event.deadline ? event.deadline : new Date()
   let createdAtDate = dayjs(createdAt).format("DD-MM-YYYY H:m")
   let deadlineDateName = dayjs(deadline).format("dd")
   let deadlineDate = dayjs(deadline).format("DD.MM")

   let description = event ? event.description : ""
   let authorImage = event ? event.authorImage : ""
   let subjectHandle = event ? event.subjectHandle : ""
   let subjectFromList = subjects.find(
      (subject) => subject.subjectId == subjectHandle
   )
   let subjectName =
      subjectFromList && subjectFromList.name
         ? subjectFromList.name
         : "Ładowanie..."

   const trashIcon =
      authenticated && event.author == currentUserHandle ? (
         <i className="fas fa-trash-alt"></i>
      ) : null

   return (
      <div className={classes.UpcomingEvent}>
         <div className={`date ${finished}`}>
            <span>{deadlineDateName}</span>
            <span>{deadlineDate}</span>
         </div>
         <div className="subject">
            <h5>{subjectName}</h5>
            <span>{description}</span>
         </div>
         <div className="avatar">
            <Avatar size="56" avatarImage={authorImage} />
         </div>
         <div className="author">
            <h5>{username}</h5>
            <span>Utworzono: {createdAtDate}</span>
         </div>
         <div className={`icons  ${finished}`}>
            <div
               onClick={() =>
                  finished ? handleSetUnfinished() : handleSetFinished()
               }
               onKeyDown={(e) => console.log()}
               role="button"
               tabIndex={0}
            >
               <i className="fas fa-check"></i>
            </div>
            <div
               onClick={() => handleEventDelete()}
               onKeyDown={() => handleEventDelete()}
               role="button"
               tabIndex={0}
            >
               {trashIcon}
            </div>
         </div>
      </div>
   )
}
