import React from "react"
import { createUseStyles } from "react-jss"
import loginBgSm from "../images/loginBgSm.svg"
import loginBgLg from "../images/loginBgLg.svg"
import style from "../css/pages/loginStyle"

const useStyles = createUseStyles(style)

export default function Login() {
   const classes = useStyles()
   return (
      <div className={classes.login}>
         <div>Ekran logowania</div>
      </div>
   )
}
