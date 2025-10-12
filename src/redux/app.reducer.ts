const initialState = {
  isLoading: false,
  showToast: false
}

export const appReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'HIDE_LOADING': {
      return {
        ...state,
        isLoading: false
      }
    }
    case 'SET_TOAST': {
      return {
        ...state,
        showToast: action.payload
      }
    }
    default:
      return state;
  }
}

