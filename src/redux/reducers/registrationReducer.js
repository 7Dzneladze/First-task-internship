import { CLOSE_POP_UP, FIRST_NAME, LAST_NAME, OPEN_POP_UP, EMAIL} from "../types"

const initialState = {
    firstname: '',
    lastName: '',
    email: '',
    popup: false,
    
}

const registrationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case FIRST_NAME:
      return {
        ...state,
        firstname: payload
      }
    case LAST_NAME:
      return {
        ...state,
        lastName: payload
      }
    case EMAIL:
      return {
        ...state,
        email: payload
      }
    case OPEN_POP_UP:
      return {
        ...state,
        popup: payload
      }
    case CLOSE_POP_UP:
      return {
        ...state,
        popup: payload
      }
      default:
        return state
    }
  }


 export default registrationReducer