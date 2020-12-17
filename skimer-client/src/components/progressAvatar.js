import React, { useState } from "react"
import { createUseStyles } from "react-jss"

import Avatar from "./Avatar"
import style from "../css/componentsStyle/ProgressAvatarStyle"

const useStyles = createUseStyles(style)

export default function ProgressAvatar() {
   const classes = useStyles()

   let [progress, setProgress] = useState(100)

   let transformation = 440 - (440 * progress) / 100

   return (
      <div className={classes.progressAvatar}>
         <Avatar />
         <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
               cx="70"
               cy="70"
               r="70"
               style={{ strokeDashoffset: transformation }}
            ></circle>
         </svg>
         <h5>Postęp: {progress}%</h5>
      </div>
   )
}
