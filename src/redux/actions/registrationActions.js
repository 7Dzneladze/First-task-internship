import { CLOSE_POP_UP, FIRST_NAME, LAST_NAME, OPEN_POP_UP, EMAIL } from "../types"

export const firstnameAction = (name) => {
    return {
        type: FIRST_NAME,
        payload: name,
    }
}

export const lastnameAcion = (lastName) => {
    return {
        type: LAST_NAME,
        payload: lastName,
    }
}

export const emailAction = (email) => {
    return {
        type: EMAIL,
        payload: email
    }
}

export const openPopUp = (data) => {
    return {
        type:OPEN_POP_UP,
        payload: data
    }
}

export const closePopUp = (data) => {
    return {
        type:CLOSE_POP_UP,
        payload: data
    }
}




