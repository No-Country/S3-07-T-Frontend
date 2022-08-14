import axios from "axios"
import {  GET_TYPES ,URL_BASE , ORDER_ALPHA, ORDER_SCORE, FILTER_BY_TYPE, GET_RECIPES } from "./constantes"



export const loadTypes = () => {
  return async (dispatch) => {
    try {
      const api = await axios.get(`${URL_BASE}/types`)
      const res= api.data
      console.log("desde actions:")
      return dispatch({
        type: GET_TYPES,
        payload: res,
      })
    }
    catch (error) { console.log(error) }
  }
}

export const getAllproyects = () => {
  return async (dispatch) => {
    try {
      const api = await axios.get(`${URL_BASE}/proyects`)
      const res= api.data
      console.log("desde actions:")
      return dispatch({
        type: GET_RECIPES,
        payload: res,
      })
    }
    catch (error) { console.log(error) }
  }
}





export function postUser(payload) {
  return async function(){
    try{const respuesta= await axios.post("http://localhost:3001/recipe", payload)
      console.log(respuesta)
      return respuesta } 
    catch(err){
      console.log(err.massage)
      return false
    }      
  }
}

export const orderAlpha = (way) => {
  return async (dispatch) => {
        
    console.log(`accion ordenar alpha ${way}`)
    
    return dispatch({
      type: ORDER_ALPHA,
      payload:way,
        
    })
        
  }
}
export const orderScore = (way) => {
  return async (dispatch) => {
        
    console.log(`accion ordenar score ${way}`)
    
    return dispatch({
      type: ORDER_SCORE,
      payload:way,
        
    })
        
  }
}

export const filterByType = (way) => {
  return async (dispatch) => {
        
    console.log(`accion Filtrar x ${way}`)
    
    return dispatch({
      type: FILTER_BY_TYPE,
      payload:way,
        
    })
        
  }
}

export const setNewSize = (size) => {
  return async (dispatch) => {
    return dispatch({
      type: "newSizeScreen",
      payload: size
    })
  }
}


export const setLoading = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: "loading",
      payload: value
    })
  }
}