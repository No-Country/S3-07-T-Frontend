export const reducerCreateTeam = (state, action) => {
  switch (action.type) {
  case "cohortType":
    return {
      ...state,
      cohortType: action.payload
    }
  case "cohortNumber":
    return {
      ...state,
      cohortNumber: action.payload
    }
  case "group":
    return {
      ...state,
      group: action.payload
    }
  case "teamLeader":
    return {
      ...state,
      teamLeader: action.payload
    }   
  case "technologies":
    return {
      ...state,
      technologies: action.payload
    }
  case "devs":
    return {
      ...state,
      devs: action.payload
    }
  default:
    return state
  }
}