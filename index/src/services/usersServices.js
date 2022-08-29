import axios from "axios"
import { SERVER_URLS } from "../configs/URLS"
import { requestError } from "./errorServices"

export const getUserByID = async (id = "6302f80e05c3ebcc65a24889") => {
  try {
    const res = await axios.get(`${SERVER_URLS.GETUSERID}/${id}`)
    console.log(res)
    return res.data.UserSprint
  } catch (error) {
    return requestError(error)
  }
}

export const editAvatar = async (id, file) => {
  try {
    const formData = new FormData()
    formData.append("avatar", file)

    const resEdit = await fetch(SERVER_URLS.EDITUSER + "/" + id, {
      method: "PUT",
      headers: {
        "enc-type": "multipart/form-data"
      },
      body: formData,
    })

    console.log(resEdit)
    return resEdit
  } catch (error) {
    console.log(error)
    return error
  }

}

