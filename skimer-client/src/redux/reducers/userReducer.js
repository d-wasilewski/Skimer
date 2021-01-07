import {
   SET_USER,
   SET_AUTHENTICATED,
   SET_UNAUTHENTICATED,
   LOADING_USER,
   SET_FINISHED,
   SET_UNFINISHED,
} from "../types"

const initialState = {
   authenticated: false,
   loading: false,
   user: undefined,
}

export default function (state = initialState, action) {
   switch (action.type) {
      case SET_AUTHENTICATED:
         return {
            ...state,
            authenticated: true,
         }

      case SET_UNAUTHENTICATED:
         return initialState

      case SET_USER:
         return {
            authenticated: true,
            loading: false,
            user: action.payload,
         }

      case LOADING_USER:
         return {
            ...state,
            loading: true,
         }
      case SET_FINISHED: {
         return {
            ...state,
            loading: false,
            user: {
               ...state.user,
               finished: [...state.user.finished, action.payload],
            },
         }
      }
      case SET_UNFINISHED: {
         const finished = [...state.user.finished]

         finished.splice(
            finished.findIndex((finished) => finished === action.payload),
            1
         )
         return {
            ...state,
            user: {
               ...state.user,
               finished,
            },
         }
      }
      default:
         return state
   }
}
