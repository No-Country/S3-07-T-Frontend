export const setNewSize = (size) => {
  return async (dispatch) => {
    return dispatch({
      type: "newSizeScreen",
      payload: size
    })
  }
}


export const setLoading = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: "loading",
      payload: value
    })
  }
}

export const setUser = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: "user",
      payload: value
    })
  }
}