const USERTYPE = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  rolDes: "",
  avatar: "",
  description: "",
  projects: [],
  teams: []
}

const initialState={
  loading: false,
  error:false,
  size: [0,0],
  user: {
    ...USERTYPE
  }
}

function rootReducer(state = initialState, action = {type: "", payload: "" | {}}){
  switch (action.type){
  case "newSizeScreen": 
    return {
      ...state,
      size : action.payload
    }
  case "user":
    return {
      ...state,
      user: action.payload
    }
  case "loading":
    return {
      ...state,
      loading: action.payload
    }
  default :
    return state
  }
}
export default rootReducer