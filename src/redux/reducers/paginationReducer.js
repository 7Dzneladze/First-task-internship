import {SET_CURRENT_PAGE} from '../types'

const intialState = {
    currentPage:1,
    perPage:10,
}

const paginationReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return { 
        ...state, 
        currentPage: payload
    }
    default:
      return state;
  }
}

export default paginationReducer