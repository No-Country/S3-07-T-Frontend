const BASE_URL = process.env.REACT_APP_ENV === "development" ? "http://localhost:3002/api" : "https://nc-community.herokuapp.com/api"

export const SERVER_URLS = {
  LOGIN: `${BASE_URL}/signIn`,
  REGISTER: `${BASE_URL}/signUp`,
  ALLPUBLICATIONS: `${BASE_URL}/publication`,
  ALLUSERS: `${BASE_URL}/listUser`,
  ALLPROJECTS: `${BASE_URL}/project`,
  ALLTEAMS: `${BASE_URL}/team`,
  ALLCATEGORIES: `${BASE_URL}/category`,
  SEARCHUSERNAME: `${BASE_URL}/searchxName`,
  ADDTEAM:`${BASE_URL}/team`,
  ADDPROJECT: `${BASE_URL}/project`,
  ADDCATEGORY: `${BASE_URL}/category`
}