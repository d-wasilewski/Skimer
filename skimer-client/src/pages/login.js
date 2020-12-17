import React from "react"
import { createUseStyles } from "react-jss"
import style from "../css/pagesStyle/loginStyle"
import logo from "../images/logo.svg"

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
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Email"
                     autoComplete="off"
                     required
                  ></input>
                  <label htmlFor="email">
                     <span className="content-name">Name</span>
                  </label>
               </div>
               <div>
                  <label htmlFor="password">Hasło</label>
                  <input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     required
                  ></input>
               </div>

               <button>Submit</button>
            </form>
         </div>
      </div>
   )
}
