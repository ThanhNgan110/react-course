import type { IVariable } from "../type"

export const setVariables = (variable: IVariable) => {
  return {
    type: 'SET_VARIABLES',
    payload: variable
  }
}