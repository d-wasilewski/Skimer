import React from "react"
import { createUseStyles } from "react-jss"

import style from "../css/components/SubjectListElementStyle"

const useStyles = createUseStyles(style)

export default function SubjectListElement(props) {
   const classes = useStyles()
   let { name } = props

   return (
      <div className={classes.SubjectListElement}>
         <h4>{name}</h4>
      </div>
   )
}
