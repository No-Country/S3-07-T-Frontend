import Ordenar from "../../utils/ordenar.js"
import { ASC, DSC, GET_RECIPES, GET_GAME_BY_ID, GET_TYPES, ORDER_ALPHA, ORDER_SCORE } from "../constantes.js"


const initialState={
  allProyects:[],
  filterProyects:[],
  types:[],
  esperandoFiltro:false,
  error:false,
}


function rootReducer(state =initialState, action = {}){
  switch (action.type){
  case "POST_GAME":    
    return { ...state,
      allgames:[...state.allgames, action.payload],
    } 
  case GET_TYPES:
    console.log("entró a get genres")
    return {
      ...state,
      types: Ordenar(action.payload, ASC, "name"),
    }
  case GET_RECIPES:
    console.log("entró a get proyects reducer")  
    return {
      ...state,
      filterProyects: action.payload ,
      allProyects: action.payload,
      esperandoFiltro:true,
    }
            
  case GET_GAME_BY_ID:
    console.log("entró a get get GAMES_By_ID reducer")
    return {
      ...state,
    }
        
  case ORDER_ALPHA:
    console.log("entró a get ORDER-ALPHA reducer")
    if(action.payload=== "A-Z"){
      let ordA= Ordenar(state.filterRecipes, ASC, "title")
      return {
        ...state,
        filterProyects: ordA,
        esperandoFiltro:false,
      }
    }
    if(action.payload=== "Z-A"){
      let ordZ= Ordenar(state.filterRecipes, DSC, "title")
      return {
        ...state,
        filterProyects: ordZ,
        esperandoFiltro:false,
      }
    }
    break
  case ORDER_SCORE:
    console.log("entró a get ORDER-SCORE reducer")
    if(action.payload=== "Less"){
      let ordMIN= Ordenar(state.allRecipes, ASC, "score")
      return {
        ...state,
        filterRecipes: ordMIN,
        esperandoFiltro:false,
      }
    }
    if(action.payload=== "Top"){
      let ordMax= Ordenar(state.allRecipes, DSC, "score")
      return {
        ...state,
        filterProyects: ordMax,
        esperandoFiltro:false,
      }
    }
    break 
  
  default:
    console.log("entro al default reducer")
    console.log("géneros: "+state.types.length)
    return state    
  }
}
export default rootReducer


/*case FILTER_BY_TYPE:
    console.log(action.payload)
    console.log(state.allRecipes.length)
    let filtrados=state.allRecipes?.filter(el=> {
      for(let i=0; i<el.diets.length ;i++ ){
        if(el.diets[i].name === action.payload){
          return el
        }
      }
      return ""
    })
    return {
      ...state,
      filterProyects: state.allRecipes?.filter(el=> {
      for(let i=0; i<el.diets.length ;i++ ){
        if(el.diets[i].name === action.payload){
          return el
        }
      }
      return ""
    }),
    }
*/