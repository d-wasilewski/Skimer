import {
   SET_USER,
   SET_ERRORS,
   CLEAR_ERRORS,
   LOADING_UI,
   SET_UNAUTHENTICATED,
   LOADING_USER,
   SET_FINISHED,
   SET_UNFINISHED,
} from "../types"
import axios from "axios"

export const loginUser = (userData, history) => (dispatch) => {
   dispatch({ type: LOADING_UI })
   axios
      .post("/login", userData)
      .then((res) => {
         setAuthorizationHeader(res.data.token)
         dispatch(getUserData())
         dispatch({ type: CLEAR_ERRORS })
         history.push("/")
      })
      .catch((err) => {
         dispatch({
            type: SET_ERRORS,
            payload: err.response.data,
         })
      })
}

export const logoutUser = () => (dispatch) => {
   localStorage.removeItem("FBIdToken")
   delete axios.defaults.headers.common["Authorization"]
   dispatch({ type: SET_UNAUTHENTICATED })
}

export const getUserData = () => (dispatch) => {
   dispatch({ type: LOADING_USER })
   axios
      .get("/user")
      .then((res) => {
         dispatch({
            type: SET_USER,
            payload: res.data,
         })
      })
      .catch((err) => console.log(err))
}

export const uploadImage = (formData) => (dispatch) => {
   dispatch({ type: LOADING_USER })
   axios
      .post("/user/image", formData)
      .then(() => {
         dispatch(getUserData())
      })
      .catch((err) => console.log(err))
}

export const setFinished = (event) => (dispatch) => {
   axios
      .post("/event/finish", event)
      .then(() => {
         dispatch({
            type: SET_FINISHED,
            payload: event.eventId,
         })
      })
      .catch((err) => console.log(err))
}

export const setUnfinished = (eventId) => (dispatch) => {
   axios
      .delete(`/event/unfinish/${eventId}`)
      .then(() => {
         dispatch({
            type: SET_UNFINISHED,
            payload: eventId,
         })
      })
      .catch((err) => console.log(err))
}

const setAuthorizationHeader = (token) => {
   const FBIdToken = `Bearer ${token}`
   localStorage.setItem("FBIdToken", FBIdToken)
   axios.defaults.headers.common["Authorization"] = FBIdToken
}
