import axios from "axios"
import { SERVER_URLS } from "../configs/URLS"
import { requestError } from "./errorServices"

export const getListTeam = async() => {
  try {
    const resList = await axios.get(SERVER_URLS.ALLTEAMS)
    return resList.data.docs
  } catch (error) {
    return requestError(error)
  }
}
