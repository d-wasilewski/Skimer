import React, { Fragment, useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux"

import style from "../../css/componentsStyle/pagesStyle/subjectStyle"

import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import HomePanel from "../layout/HomePanel"

import UpcomingEvent from "../events/UpcomingEvent"
import Avatar from "../util/Avatar"

import {
   getSubject,
   getUsers,
   deleteEvent,
} from "../../redux/actions/dataActions"

const useStyles = createUseStyles(style)

export default function Subject(props) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const id = props.match.params.sid
   const subject = useSelector((state) => state.data.subject)

   const [showModal, setShowModal] = useState(false)
   const toggleModal = () => setShowModal(!showModal)

   useEffect(() => {
      dispatch(getSubject(id))
      dispatch(getUsers())
   }, [dispatch])

   const renderLeaderList = () => {
      return subject && subject.info && subject.info.leaders
         ? subject.info.leaders.map((item, index) => (
              <div className="element" key={index}>
                 <h5>{item.name}</h5>
                 <span>{item.email}</span>
              </div>
           ))
         : null
   }

   const renderHoursList = () => {
      return subject && subject.info && subject.info.hours
         ? subject.info.hours.map((item, index) => (
              <div className="element" key={index}>
                 <h5>{item.time}</h5>
                 <span>{item.type}</span>
              </div>
           ))
         : null
   }

   const renderEventList = () => {
      return subject && subject.events
         ? subject.events.map((item, index) => (
              <UpcomingEvent
                 event={item}
                 key={item.eventId}
                 handleEventDelete={() =>
                    handleEventDelete(index, item.eventId)
                 }
              />
           ))
         : null
   }

   const handleEventDelete = (index, id) => {
      dispatch(deleteEvent(id))
   }

   return (
      <Fragment>
         <Sidebar />
         <HomePanel />
         <Navbar />
         <div className={classes.subject}>
            <div>
               <div className="info">
                  <h3>Prowadzący</h3>
                  {renderLeaderList()}
               </div>
               <div className="hours">
                  <h3>Godziny zajęć</h3>
                  {renderHoursList()}
               </div>
            </div>
            <div>
               <div className="notes">
                  <h3>
                     <span>Nadchodzące wydarzenia</span>
                     <button onClick={toggleModal}>
                        <i className="fas fa-plus"></i>
                     </button>
                  </h3>
                  {renderEventList()}
               </div>
            </div>
         </div>
      </Fragment>
   )
}
