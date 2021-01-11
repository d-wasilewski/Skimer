import {
   SET_USERS,
   SET_EVENTS,
   ADD_EVENT,
   SET_SUBJECTS,
   SET_SUBJECT,
   CLEAR_SUBJECT,
   LOADING_UI,
   REMOVE_EVENT,
   SET_ERRORS,
   CLEAR_ERRORS,
   LOADING_DATA,
} from "../types"
import axios from "axios"

export const getUsers = () => (dispatch) => {
   dispatch({ type: LOADING_DATA })
   axios
      .get("/users")
      .then((res) => {
         dispatch({
            type: SET_USERS,
            payload: res.data,
         })
      })
      .catch((err) => console.log(err))
}

export const getEvents = () => (dispatch) => {
   dispatch({ type: LOADING_DATA })
   axios
      .get("/events")
      .then((res) => {
         dispatch({
            type: SET_EVENTS,
            payload: res.data,
         })
      })
      .catch((err) => console.log(err))
}

export const addEvent = (event) => (dispatch) => {
   dispatch({ type: LOADING_UI })
   axios
      .post("/event", event)
      .then((res) => {
         dispatch({
            type: ADD_EVENT,
            payload: res.data,
         })
         dispatch({ type: CLEAR_ERRORS })
      })
      .catch((err) => {
         dispatch({
            type: SET_ERRORS,
            payload: err.response.data,
         })
      })
}

export const getSubjects = () => (dispatch) => {
   dispatch({ type: LOADING_DATA })
   axios
      .get("/subjects")
      .then((res) => {
         dispatch({
            type: SET_SUBJECTS,
            payload: res.data,
         })
      })
      .catch((err) => console.log(err))
}

export const getSubject = (subjectID) => (dispatch) => {
   dispatch({ type: LOADING_DATA })
   axios
      .get(`/subject/${subjectID}`)
      .then((res) => {
         dispatch({
            type: SET_SUBJECT,
            payload: res.data,
         })
      })
      .catch((err) => console.log(err))
}

export const clearSubject = () => (dispatch) => {
   dispatch({ type: LOADING_UI })
   dispatch({
      type: CLEAR_SUBJECT,
      payload: null,
   })
}

export const deleteEvent = (eventId) => (dispatch) => {
   axios
      .delete(`/event/${eventId}`)
      .then(() => {
         dispatch({ type: REMOVE_EVENT, payload: eventId })
      })
      .catch((err) => console.log(err))
}
