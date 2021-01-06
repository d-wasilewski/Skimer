import React, { useState, useRef, useEffect, Fragment } from "react"
import { createUseStyles } from "react-jss"
import { navigate } from "@reach/router"
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
   getUsers,
   getEvents,
   deleteEvent,
} from "../../redux/actions/dataActions"
import SubjectListElementStyle from "../../css/componentsStyle/subjectsStyle/SubjectListElementStyle"

const useStyles = createUseStyles(style)

export default function Home() {
   const classes = useStyles()
   const dispatch = useDispatch()

   const subjects = useSelector((state) => state.data.subjects)
   const users = useSelector((state) => state.data.users)
   const events = useSelector((state) => state.data.events)

   const [showModal, setShowModal] = useState(false)

   const toggleModal = () => setShowModal(!showModal)

   useEffect(() => {
      dispatch(getSubjects())
      dispatch(getUsers())
      dispatch(getEvents())
   }, [dispatch])

   const renderSubjectsList = () => {
      return subjects?.map((item) => (
         <SubjectListElement name={item.name} key={item.name} />
      ))
   }

   const renderEventsList = () => {
      return events?.map((item, index) => (
         <UpcomingEvent
            event={item}
            key={item.eventId}
            handleEventDelete={() => handleEventDelete(index, item.eventId)}
         />
      ))
   }

   const handleEventDelete = (index, id) => {
      dispatch(deleteEvent(id))
   }

   return (
      <Fragment>
         <Sidebar />
         <HomePanel />
         <Navbar />
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
      </Fragment>
   )
}
