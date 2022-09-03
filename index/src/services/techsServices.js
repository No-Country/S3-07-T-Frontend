import axios from "axios"
import { SERVER_URLS } from "../configs/URLS"
import { requestError } from "./errorServices"

export const getListTech = async() => {
  try {
    const resList = await axios.get(SERVER_URLS.ALLTECHS)
    return resList.data
  } catch (error) {
    return requestError(error)
  }
}