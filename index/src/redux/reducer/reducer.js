const initialState={
  allProyects:[],
  filterProyects:[],
  detail:{},
  types:[],
  esperandoFiltro:false,
  loading: false,
  error:false,
  size: [0,0],
}

function rootReducer(state = initialState, action = {type: "", payload: "" | {}}){
  switch (action.type){
  case "newSizeScreen": 
    return {
      ...state,
      size : action.payload
    }
  case "newDataInRegister":
    return {
      ...state,
      size: action.payload
    }
  case "loading":
    return {
      ...state,
      loading: action.payload
    }
  case "GET_PROYECT_DETAIL":
    return {
      ...state,
      detail: action.payload
    }
  default :
    return state
  }
}
export default rootReducer