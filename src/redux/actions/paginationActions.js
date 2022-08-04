import { SET_CURRENT_PAGE } from "../types"

export const setCurrentPage = (page) => {
    return {
      type: SET_CURRENT_PAGE,
      payload: page
    }
  }