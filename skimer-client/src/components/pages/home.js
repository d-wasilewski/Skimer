import React, { useState, useEffect, Fragment } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux"

import style from "../../css/componentsStyle/pagesStyle/homeStyle"

import Modal from "../util/Modal"
import AddEvent from "../events/AddEvent"
import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import HomePanel from "../layout/HomePanel"
import SubjectListElement from "../subjects/SubjectListElement"
import UpcomingEvent from "../events/UpcomingEvent"

import {
   getSubjects,
   clearSubject,
   getUsers,
   getEvents,
   deleteEvent,
} from "../../redux/actions/dataActions"

import { setFinished, setUnfinished } from "../../redux/actions/userActions"

const useStyles = createUseStyles(style)

export default function Home() {
   const classes = useStyles()
   const dispatch = useDispatch()

   const subjects = useSelector((state) => state.data.subjects)
   const events = useSelector((state) => state.data.events)
   const loading = useSelector((state) => state.data.loading)
   const { user } = useSelector((state) => state.user)
   const finishedEvents = user && user.finished ? user.finished : []

   const [showModal, setShowModal] = useState(false)

   const toggleModal = () => setShowModal(!showModal)

   useEffect(() => {
      dispatch(getSubjects())
      dispatch(getUsers())
      dispatch(getEvents())
      dispatch(clearSubject())
   }, [dispatch])

   const renderSubjectsList = () => {
      return subjects?.map((item) => (
         <SubjectListElement
            name={item.name}
            key={item.name}
            id={item.subjectId}
         />
      ))
   }

   const renderEventsList = () => {
      return events.length > 0 ? (
         events?.map((item) => {
            const isFinished =
               finishedEvents.indexOf(item.eventId) != -1 ? "finished" : ""
            return (
               <UpcomingEvent
                  event={item}
                  key={item.eventId}
                  finished={isFinished}
                  handleEventDelete={() => handleEventDelete(item.eventId)}
                  handleSetFinished={() => handleSetFinished(item)}
                  handleSetUnfinished={() => handleSetUnfinished(item.eventId)}
               />
            )
         })
      ) : (
         <div className="noEvents">Nie masz żadnych nowych wydarzeń</div>
      )
   }

   const handleEventDelete = (id) => {
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
         <Navbar />
         {loading ? (
            <div className={classes.spinner}>
               <i className="fas fa-spinner fa-pulse loading"></i>
            </div>
         ) : (
            <div className={classes.home}>
               <div>
                  <div className="subjects">
                     <h3>
                        <span>Lista przedmiotów</span>
                     </h3>
                     {renderSubjectsList()}
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
                     {renderEventsList()}
                  </div>
               </div>
               {showModal ? (
                  <Modal>
                     <AddEvent toggleModal={toggleModal} />
                  </Modal>
               ) : null}
            </div>
         )}
      </Fragment>
   )
}
