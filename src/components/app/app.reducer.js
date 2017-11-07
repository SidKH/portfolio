let defaultState = {
  activeSection: null
}

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_SET_ACTIVE_SECTION':
      return {
        ...state,
        activeSection: action.key
      }
    default:
      return state;
  }
}
export default AppReducer;