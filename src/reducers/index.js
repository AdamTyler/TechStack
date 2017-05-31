import { combineReducers } from 'redux'
import LibraryReducer from './library'
import SelectionReducer from './selection'

export default combineReducers({
  libraries: LibraryReducer,
  selectedId: SelectionReducer
})
