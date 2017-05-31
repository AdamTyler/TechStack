export default (state = null, action) => {
  switch(action.type) {
    case 'SELECT_LIBRARY':
      return action.id
    default:
      return state
  }
}
