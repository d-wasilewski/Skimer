import React from "react"
import { createUseStyles } from "react-jss"
import style from "../../css/componentsStyle/pagesStyle/loginStyle"

import Button from "../util/Button"

import logo from "../../images/logo.svg"

const useStyles = createUseStyles(style)

export default function Login() {
   const classes = useStyles()
   return (
      <div className={classes.login}>
         <div className="container">
            <div className="login-header">
               <img src={logo} alt="Skimer" className="logo" />

               <span>Skimer</span>
            </div>

            <div className="login-zalogujsie">Zaloguj się</div>

            <form>
               <div className="form">
                  <input
                     type="text"
                     name="email"
                     id="email"
                     autoComplete="off"
                     required
                  ></input>
                  <label htmlFor="email" className="label-name">
                     <span className="content-name">Name</span>
                  </label>
               </div>
               <div className="form">
                  <input
                     type="password"
                     name="password"
                     id="password"
                     required
                  ></input>
                  <label htmlFor="password" className="label-name">
                     <span className="content-name">Haslo</span>
                  </label>
               </div>
               <Button>Zaloguj się</Button>
            </form>
         </div>
      </div>
   )
}
