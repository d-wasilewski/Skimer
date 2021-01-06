import {
   SET_USERS,
   SET_EVENTS,
   ADD_EVENT,
   SET_SUBJECTS,
   SET_SUBJECT,
   LOADING_DATA,
} from "../types"

const initialState = {
   users: [],
   events: [],
   subjects: [],
   subject: {},
   loading: false,
}

export default function (state = initialState, action) {
   switch (action.type) {
      case LOADING_DATA:
         return {
            ...state,
            loading: true,
         }
      case SET_USERS:
         return {
            ...state,
            loading: false,
            users: action.payload,
         }
      case SET_EVENTS:
         return {
            ...state,
            loading: false,
            events: action.payload,
         }
      case ADD_EVENT:
         return {
            ...state,
            loading: false,
            events: [action.payload, ...state.events],
         }
      case SET_SUBJECTS:
         return {
            ...state,
            loading: false,
            subjects: action.payload,
         }
      case SET_SUBJECT:
         return {
            ...state,
            loading: false,
            subject: action.payload,
         }

      default:
         return state
   }
}
