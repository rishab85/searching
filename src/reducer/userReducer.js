export function hasError(state=false, action){
  switch (action.type) {
    case "ERROR_OCCURED":
      return action.errorOccured;
    default:
      return state;
  }
}

export function isActive(state=false, action){
  switch (action.type) {
    case "IS_ACTIVE":
      return action.isActive;
    default:
      return state;
  }
}

export function isLoading(state=false,action){
  switch (action.type) {
    case "IS_LOADING":
      return action.isLoading
    default:
      return state;
  }
}

export function items(state=[], action){
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.items.items
    default:
      return state;
  }
}
