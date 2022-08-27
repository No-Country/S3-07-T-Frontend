import axios from "axios"
import { GET_PROYECTS } from "./constantes"
import { SERVER_URLS} from "../configs/URLS"

const ruta_proyectos = SERVER_URLS.ALLPROJECTS

export const getAllproyects = () => {
  return async (dispatch) => {
    try {
      const api = await axios.get(`${SERVER_URLS.URL_BASE}/proyects`)
      const res= api.data
      return dispatch({
        type: GET_PROYECTS,
        payload: res,
      })
    }
    catch (error) { console.log(error) }
  }
}

export const getProyectById = (id) => {
  return async (dispatch) => {
    try {
      const api = await axios.get(`${ruta_proyectos}/${id}`)
      const res = api.data
      return dispatch({
        type: "GET_PROYECT_DETAIL",
        payload: res,
      })
    }
    catch (error) { console.log(error) }
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

export const setUser = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: "user",
      payload: value
    })
  }
}