import React, { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/utilStyle/AvatarStyle"

import AvatarImage from "../../images/unknown.png"

const useStyles = createUseStyles(style)

export default function Avatar(props) {
   let [initials, setInitials] = useState("MD")
   const { size, avatarImage } = props
   let override
   if (size) {
      let scale = size / 86
      override = {
         transform: `scale(${scale})`,
      }
   }

   const classes = useStyles()

   return (
      <div className={classes.Avatar} style={override}>
         <h4 className="initials">{initials}</h4>
         {avatarImage ? <img src={avatarImage} alt="Avatar" /> : null}
      </div>
   )
}
