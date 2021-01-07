import React from "react"
import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"

import style from "../../css/componentsStyle/subjectsStyle/SubjectListElementStyle"

const useStyles = createUseStyles(style)

export default function SubjectListElement({ name, id }) {
   const classes = useStyles()

   return (
      <Link to={`/subject/${id}`} style={{ textDecoration: "none" }}>
         <span className={classes.SubjectListElement}>{name}</span>
      </Link>
   )
}
