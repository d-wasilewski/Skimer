import React, { useState } from "react"
import { createUseStyles } from "react-jss"

import style from "../css/pagesStyle/loginStyle"
import logo from "../images/logo.svg"
import axios from "axios"

import style from "../../css/componentsStyle/pagesStyle/loginStyle"

import Button from "../util/Button"

import logo from "../../images/logo.svg"

const useStyles = createUseStyles(style)

export default function Login() {
   const classes = useStyles()

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [errors, setErrors] = useState({})

   const setAuthorizationHeader = (token) => {
      const FBIdToken = `Bearer ${token}`
      localStorage.setItem("FBIdToken", FBIdToken)
      axios.defaults.headers.common["Authorization"] = FBIdToken
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const userData = {
         email,
         password,
      }

      axios
         .post("/login", userData)
         .then((res) => {
            console.log(res.data)
            setAuthorizationHeader(res.data.token)
            // dispatch(getUserData())
            // dispatch({ type: CLEAR_ERRORS })
            // history.push('/')
         })
         .catch((err) => {
            // dispatch({
            //     type: SET_ERRORS,
            //     payload: err.response.data
            // })
         })
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
               <div className="form">
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
               <div className="form">
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
               <Button>Zaloguj się</Button>
            </form>
         </div>
      </div>
   )
}
