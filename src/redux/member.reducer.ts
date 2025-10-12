/*
variables = [
  {
    id: xx,
    name: xx,
    odd
  }
]
*/

const initialState = {
  variables: []
}

export const memberReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'SET_VARIABLES': {
      return {
        ...state,
        variables: [...state.variables, action.payload]
      }
    }
    default:
      return state;
  }
}

