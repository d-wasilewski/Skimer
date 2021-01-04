import React, { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"

import axios from "axios"
import style from "../../css/componentsStyle/pagesStyle/loginStyle"
import Button from "../util/Button"
import logo from "../../images/logo.svg"
import { loginUser } from "../../redux/actions/userActions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const useStyles = createUseStyles(style)

function Login(props) {
   const classes = useStyles()

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [errors, setErrors] = useState()

   const handleSubmit = (e) => {
      e.preventDefault()
      const userData = {
         email,
         password,
      }
      props.loginUser(userData, props.history)
      console.log(props)
      console.log(errors.email)
   }

   useEffect(() => {
      setErrors(props.UI.errors)
   }, [props.UI])

   useEffect(() => {
      setErrors({})
   })

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
               {errors.general ? errors.general : null}
               <Button>Zaloguj się</Button>
            </form>
         </div>
      </div>
   )
}

Login.propTypes = {
   loginUser: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   UI: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
   user: state.user,
   UI: state.UI,
})

const mapActionsToProps = {
   loginUser,
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
