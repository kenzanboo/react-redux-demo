import { combineReducers } from 'redux'
import {
  RECEIVE_USERS
} from '../actions'

const usersByStatus = (state = {
}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        [action.status]: action.users,
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  usersByStatus
})

export default rootReducer
