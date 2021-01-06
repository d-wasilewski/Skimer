import React, { Fragment } from "react"
import { createUseStyles } from "react-jss"
import style from "../../css/componentsStyle/utilStyle/TextInputStyle"

const useStyles = createUseStyles(style)

export default function TextInput(props) {
   const { onChange, value, type, name, id, autoComplete, label } = props

   const classes = useStyles()

   return (
      <div className={classes.input}>
         <input
            onChange={onChange}
            value={value}
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
         ></input>
         <label htmlFor={id} className="label-name">
            <span className="content-name">{label}</span>
         </label>
      </div>
   )
}
