import React from "react"
import { createUseStyles } from "react-jss"

import style from "../css/pages/homeStyle"

const useStyles = createUseStyles(style)

export default function Home() {
   const classes = useStyles()

   return (
      <div className={classes.home}>
         <div className="subjects">
            <h3>Lista przedmiotów</h3>
         </div>
         <div className="notes">
            <h3>Notatki</h3>
         </div>
      </div>
   )
}
