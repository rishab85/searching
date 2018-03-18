export function errorOccured(bool){
  return{
    type: "ERROR_OCCURED",
    errorOccured : bool
  }
}

export function isLoading(bool){
  return{
    type:"IS_LOADING",
    isLoading : bool
  }
}

export function isActive(bool){
  return{
    type : "IS_ACTIVE",
    isActive : bool
  }
}

export function fetchSuccess(items){
  return{
    type:"FETCH_SUCCESS",
    items
  }
}

export function fetchData(url){
  return((dispatch)=>{
    dispatch(isLoading(true));

    fetch(url)
    .then((response)=>{
      if(!response.ok){
        throw Error(response.status)
      }

      dispatch(isLoading(false));
      return response;
    })
    .then((response)=>response.json())
    .then((items)=>dispatch(fetchSuccess(items)))
    .catch(()=>dispatch(errorOccured(true)));

  })
}
