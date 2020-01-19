const initialState = {
    count:0,
    data: [],
    isLoading: false,
    isError: false,
    success: false
  }
  
  const login = (state=initialState, action)=>{
    switch(action.type){
      case 'POST_USER_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case 'POST_USER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      case 'POST_USER_FULFILLED':
        return {
          ...state,
          data: action.payload.data,
          isLoading: false,
          isError: false,
          success: action.payload.data.success
          // isSuccess: true
        }
        default :
          return state
    }
  }
  
  export default login