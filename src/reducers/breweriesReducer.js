export default (state = [], action) => {
  if(action.type === 'FETCH_BREWERIES') {
    return action.payload
  }

  return state
}
