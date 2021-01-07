import React, { Fragment, useEffect } from "react"
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

   useEffect(() => {
      dispatch(getSubject(id))
      dispatch(getUsers())
   }, [dispatch])

   const renderLeaderList = () => {
      return subject?.map((index) => (
         <div className="element" key={index}>
            <h5>dr. Mateusz Smoliński</h5>
            <span>email@edu.p.lodz.pl</span>
         </div>
      ))
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
                  <div className="element">
                     <h5>dr. Mateusz Smoliński</h5>
                     <span>email@edu.p.lodz.pl</span>
                  </div>
                  <div className="element">
                     <h5>dr. Mateusz Smoliński</h5>
                     <span>email@edu.p.lodz.pl</span>
                  </div>
               </div>
               <div className="hours">
                  <h3>Godziny zajęć</h3>
                  <div className="element">
                     <h5>Poniedziałek 14:00</h5>
                     <span>Laboratoria grupa 1</span>
                  </div>
                  <div className="element">
                     <h5>Wtorek 15:00</h5>
                     <span>Wykład</span>
                  </div>
               </div>
            </div>
            <div>
               <div className="notes">
                  <h3>Nadchodzące wydarzenia</h3>
                  <UpcomingEvent />
                  <UpcomingEvent />
                  <UpcomingEvent />
                  <UpcomingEvent />
                  <UpcomingEvent />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
