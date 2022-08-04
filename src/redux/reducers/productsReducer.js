import {SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, SORT_PRODUCTS} from '../types'

const intialState = {
  products: [],
  cart: []
}

const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload }
    case ADD_TO_CART:
      let item = state.products.find(
        (product) => product.id === payload.id
      )
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      )
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id
                ? { ...item}
                : item
            )
          : [...state.cart, { ...item,}],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      }
    case SORT_PRODUCTS:
      const sortedItems = state.products.sort((a, b)=> {
        if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1}
        if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1}
        return 0
      
      })
      return {
        ...state,
        products: [...sortedItems]
      }
    
    default:
      return state;
  }
}

export default productsReducer