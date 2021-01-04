import React from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/subjectsStyle/SubjectListElementStyle"

const useStyles = createUseStyles(style)

export default function SubjectListElement(props) {
   const classes = useStyles()
   let { name } = props

   return <div className={classes.SubjectListElement}>{name}</div>
}
