import React, { Fragment } from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/pagesStyle/subjectStyle"

import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import HomePanel from "../layout/HomePanel"

import UpcomingEvent from "../events/UpcomingEvent"
import Avatar from "../util/Avatar"

const useStyles = createUseStyles(style)

export default function Subject(props) {
   const classes = useStyles()

   console.log(props)

   return (
      <Fragment>
         <Sidebar />
         <HomePanel />
         <Navbar />
         <div className={classes.subject}>
            <div>
               <div className="info">
                  <h3>Informacje o przedmiocie</h3>

                  <div className="leaders">
                     <div className="leader">
                        <div className="avatar">
                           <Avatar size="56" />
                        </div>
                        <div className="name">
                           <h5>dr. Mateusz Smoliński</h5>
                           <span>aka Imperator</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="hours">
                  <h3>Godziny zajęć</h3>
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
