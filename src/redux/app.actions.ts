export const showLoading = () => {
  return {
    type: 'SHOW_LOADING'
  }
}

export const hideLoading = () => {
  return {
    type: 'HIDE_LOADING'
  }
}

export const setToast = (isToast: boolean) => {
  return {
    type: 'SET_TOAST',
    payload: isToast
  }
}