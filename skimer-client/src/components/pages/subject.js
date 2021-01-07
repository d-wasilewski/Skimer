import React, { Fragment, useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux"

import style from "../../css/componentsStyle/pagesStyle/subjectStyle"

import Modal from "../util/Modal"
import AddEvent from "../events/AddEvent"
import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import HomePanel from "../layout/HomePanel"

import UpcomingEvent from "../events/UpcomingEvent"
import Avatar from "../util/Avatar"

import {
   getSubjects,
   getSubject,
   getUsers,
   deleteEvent,
} from "../../redux/actions/dataActions"
import { setFinished, setUnfinished } from "../../redux/actions/userActions"

const useStyles = createUseStyles(style)

export default function Subject(props) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const id = props.match.params.sid
   const subject = useSelector((state) => state.data.subject)

   const name =
      subject && subject.info && subject.info.name ? subject.info.name : ""

   const [showModal, setShowModal] = useState(false)
   const toggleModal = () => setShowModal(!showModal)

   const { user } = useSelector((state) => state.user)
   const finishedEvents = user && user.finished ? user.finished : []

   useEffect(() => {
      dispatch(getSubjects())
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
         ? subject.events.map((item, index) => {
              const isFinished =
                 finishedEvents.indexOf(item.eventId) != -1 ? "finished" : ""
              return (
                 <UpcomingEvent
                    event={item}
                    key={item.eventId}
                    finished={isFinished}
                    handleEventDelete={() => handleEventDelete(item.eventId)}
                    handleSetFinished={() => handleSetFinished(item)}
                    handleSetUnfinished={() =>
                       handleSetUnfinished(item.eventId)
                    }
                 />
              )
           })
         : null
   }

   const handleEventDelete = (index, id) => {
      dispatch(deleteEvent(id))
   }
   const handleSetFinished = (event) => {
      dispatch(setFinished(event))
   }
   const handleSetUnfinished = (eventId) => {
      dispatch(setUnfinished(eventId))
   }

   return (
      <Fragment>
         <Sidebar />
         <HomePanel />
         <Navbar badge={name} />
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
               {showModal ? (
                  <Modal>
                     <AddEvent toggleModal={toggleModal} />
                  </Modal>
               ) : null}
            </div>
         </div>
      </Fragment>
   )
}
