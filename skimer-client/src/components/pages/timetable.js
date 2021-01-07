import React, { Fragment } from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/pagesStyle/timetableStyle"
import timetableImg from "../../images/timetableImg.png"

import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import HomePanel from "../layout/HomePanel"

const useStyles = createUseStyles(style)

export default function Timetable() {
   const classes = useStyles()

   return (
      <Fragment>
         <Sidebar />
         <HomePanel />
         <Navbar />
         <div className={classes.timetable}>
            <img src={timetableImg} alt="Plan zajęć" />
         </div>
      </Fragment>
   )
}
