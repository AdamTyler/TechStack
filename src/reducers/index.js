import { combineReducers } from 'redux'
import LibraryReducer from './library'

export default combineReducers({
  libraries: LibraryReducer
})
