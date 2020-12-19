import React, { Fragment } from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/pagesStyle/chatStyle"

import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import ChatPanel from "../layout/ChatPanel"
import SubjectListElement from "../subjects/SubjectListElement"
import UpcomingEvent from "../events/UpcomingEvent"

const useStyles = createUseStyles(style)

export default function Chat() {
   const classes = useStyles()

   const subjects = [
      { name: "Programowanie Komponentowe" },
      { name: "Podstawy Zarządzania Projektami" },
      { name: "Komputerowa Analiza Danych" },
   ]

   const subjectList = subjects.map((item) => (
      <SubjectListElement name={item.name} key={item.name} />
   ))

   return (
      <Fragment>
         <Sidebar />
         <ChatPanel />
         <Navbar />
         <div className={classes.home}>
            <div>
               <div className="subjects">
                  <h3>Lista przedmiotów</h3>
                  {subjectList}
               </div>
            </div>
            <div>
               <div className="notes">
                  <h3>Nadchodzące wydarzenia</h3>
                  <UpcomingEvent />
                  <UpcomingEvent />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
