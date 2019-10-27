import {combineReducers} from 'redux'
import {
    NEXT_PLAYER,
    NEW_NEXTPLAYER,
    PLAY_AGAIN,
    SORT_ASCEND,
    IS_ASCENDING,
    GET_WINSQUARES,
    NEW_WINNER,
    NEW_HISTORY,
    NEW_STEPNUMBER,
    USER_SIGNUP,
    USER_LOGIN,
    USER_LOGOUT
} from '../actions/actions'

const xIsNext = (state = true, action) => {
    switch (action.type) {
      case NEXT_PLAYER:
        return !state
      case NEW_NEXTPLAYER:
        return action.newnextplayer
      case PLAY_AGAIN:
        return true
      default:
        return state
    }
}

const sortAscend = (state = false, action) => {
    switch (action.type) {
      case SORT_ASCEND:
        return !state
      default:
        return state
    }
}

const isAscending = (state = false, action) => {
  switch (action.type) {
    case IS_ASCENDING:
      return !state
    case PLAY_AGAIN:
      return state
    default:
      return state
  }
}

const winSquares = (state = [], action) => {
    switch (action.type) {
      case GET_WINSQUARES:
        return action.newwinSquares
      case PLAY_AGAIN:
        return []
      default:
        return state
    }
}

const winner = (state = null, action) => {
    switch (action.type) {
      case NEW_WINNER:
        return action.newwinner
      case PLAY_AGAIN:
        return null
      default:
        return state
    }
}

const history = (state = [{row: null, col: null}], action) => {
    switch (action.type) {
      case NEW_HISTORY:
        return action.newhistory
      case PLAY_AGAIN:
        return [{row: null, col: null}]
      default:
        return state
    }
}

const stepNumber = (state = 0, action) => {
    switch (action.type) {
      case NEW_STEPNUMBER:
        return action.newstepNumber
      case PLAY_AGAIN:
        return 0
      default:
        return state
    }
}

const initialState = {
  currentUser: {}
}

const signUp = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP:
        return action.payload;
    default:
      return state;
  }
}

const logIn = (state = {initialState}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload
      }
    case USER_LOGOUT:
      return {
        ...state,
        currentUser: {}
      }
      default:
        return state;
  }
}

export default combineReducers({
    xIsNext,
    sortAscend,
    isAscending,
    winSquares,
    winner,
    history,
    stepNumber,
    signUp,
    logIn
});
  