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
         <div className="container">
            <div className="login-header"></div>

            <div className="login-zalogujsie">Zaloguj się</div>

            <form className="form">
               <div>
                  <label htmlFor="email">Login</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Email"
                     required
                  ></input>
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
