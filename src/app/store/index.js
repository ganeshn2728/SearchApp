import { combineReducers } from 'redux-immutable'
import searchContainer from '../store/Search/reducer'

const rootReducer = combineReducers({
  searchContainer,
})

export default rootReducer
