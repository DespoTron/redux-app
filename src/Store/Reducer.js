const initialState = {
  message: 'Subscribe to Learn Redux',
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  if (action.type === 'Message change') {
    newState.message = 'Thank you for subsribing'
  }
  return newState
}

export default reducer
