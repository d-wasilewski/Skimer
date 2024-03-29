import React, { useState } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux"

import style from "../../css/componentsStyle/pagesStyle/loginStyle"
import Button from "../util/Button"
import logo from "../../images/logo.svg"
import { loginUser } from "../../redux/actions/userActions"

const token = localStorage.FBIdToken
if (token && window.location.pathname == "/login") {
   window.location.href = "/"
}
const useStyles = createUseStyles(style)

function Login(props) {
   const classes = useStyles()
   const dispatch = useDispatch()

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const errors = useSelector((state) => state.UI.errors)

   const handleSubmit = (e) => {
      e.preventDefault()
      const userData = {
         email,
         password,
      }
      dispatch(loginUser(userData, props.history))
   }

   return (
      <div className={classes.login}>
         <div className="container">
            <div className="login-header">
               <img src={logo} alt="Skimer" className="logo" />

               <span>Skimer</span>
            </div>

            <div className="login-zalogujsie">Zaloguj się</div>

            <form noValidate onSubmit={handleSubmit}>
               <div className={errors && errors.email ? "error form" : "form"}>
                  <input
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
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
               {errors && errors.email ? (
                  <div className="emptyError"> {errors.email}</div>
               ) : null}

               <div
                  className={errors && errors.password ? "error form" : "form"}
               >
                  <input
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     type="password"
                     name="password"
                     id="password"
                     required
                  ></input>
                  <label htmlFor="password" className="label-name">
                     <span className="content-name">Haslo</span>
                  </label>
               </div>
               {errors && errors.password ? (
                  <div className="emptyError"> {errors.password}</div>
               ) : null}
               {errors && errors.general ? (
                  <div className="wrongError"> {errors.general}</div>
               ) : null}
               <Button>Zaloguj się</Button>
            </form>
         </div>
      </div>
   )
}

export default Login
