import React, { useState, useRef } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux"

import Avatar from "./Avatar"
import style from "../../css/componentsStyle/utilStyle/ProgressAvatarStyle"
import { uploadImage, getUserData } from "../../redux/actions/userActions"

const useStyles = createUseStyles(style)

export default function ProgressAvatar({ avatarImage, progress }) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const elInput = useRef(null)

   let transformation = 440 - (440 * progress) / 100

   const handleUpdateImage = () => {
      elInput.current.click()
   }

   const handleChange = (e) => {
      const image = e.target.files[0]
      const formData = new FormData()
      formData.append("image", image, image.name)
      dispatch(uploadImage(formData))
      dispatch(getUserData)
   }

   return (
      <div className={classes.progressAvatar}>
         <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
               cx="70"
               cy="70"
               r="70"
               style={{ strokeDashoffset: transformation }}
            ></circle>
         </svg>
         <Avatar handler={handleUpdateImage} avatarImage={avatarImage} />
         <h5>Postęp: {progress}%</h5>
         <input type="file" ref={elInput} onChange={handleChange} />
      </div>
   )
}
