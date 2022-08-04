import {ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCTS, SORT_PRODUCTS} from '../types'

export const setProducts = (products) => {
    return {
      type: SET_PRODUCTS,
      payload: products,
    }
  }

export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  }
}

export const sortProducts = (products) => {
  return {
    type: SORT_PRODUCTS,
    payload: products
  }
}
  