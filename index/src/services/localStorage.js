export const JSONUserStorage = JSON.parse(localStorage.getItem("userLogin")).user
export const JSONTokenUserStorage =  JSON.parse(localStorage.getItem("userLogin")).token

export const saveDataLogin = (data) => {
  localStorage.setItem("userLogin", JSON.stringify(data))
}
