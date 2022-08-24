export function reducerCreateProject (state, action) {
  switch (action.type) {
  case "title":
    return {
      ...state,
      title: action.payload
    }
  case "description":
    return {
      ...state,
      description: action.payload
    }
  case "image":
    return {
      ...state,
      image: action.payload
    }
  case "author":
    return {
      ...state,
      author: action.payload
    }
  case "video":
    return {
      ...state,
      video: action.payload
    }
  case "teamLeader":
    return {
      ...state,
      teamLeader: action.payload
    }
  case "team":
    return {
      ...state,
      team: action.payload
    }
  case "categories":
    return {
      ...state,
      categories: action.payload
    }
      
  default:
    return state
  }
}