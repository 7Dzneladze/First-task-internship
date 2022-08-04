import { combineReducers } from "redux"
import productsReducer from "./reducers/productsReducer"
import paginationReducer from "./reducers/paginationReducer"
import registrationReducer from './reducers/registrationReducer'




const rootReducer = combineReducers({
    allProducts: productsReducer,
    pages: paginationReducer,
    registration: registrationReducer,
   
})

export default rootReducer