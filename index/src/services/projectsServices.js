import axios from "axios"
import { SERVER_URLS } from "../configs/URLS"

export const getProjectById = async(id) => {
  const res = await axios.get(SERVER_URLS.ALLPROJECTS + "/" + id)
  return res.data
}