import React, { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"

import style from "../../css/componentsStyle/utilStyle/AvatarStyle"

const useStyles = createUseStyles(style)

export default function Avatar({ size, avatarImage, handler }) {
   let [initials, setInitials] = useState("MD")
   let override = {}
   if (size) {
      let scale = size / 86
      override.transform = `scale(${scale})`
   }
   handler ? (override.cursor = "pointer") : null

   const classes = useStyles()

   return (
      <div
         className={classes.Avatar}
         style={override}
         onClick={handler}
         onKeyDown={handler}
         role="button"
         tabIndex="0"
      >
         <h4 className="initials">{initials}</h4>
         {avatarImage ? <img src={avatarImage} alt="Avatar" /> : null}
      </div>
   )
}
