import React from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/utilStyle/ButtonStyle"

const useStyles = createUseStyles(style)

export default function Button(props) {
   const classes = useStyles()
   const { children } = props
   return <button className={classes.waveButton}>{children}</button>
}
