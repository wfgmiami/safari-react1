import _posts from '../data/posts';
import {combineReducers} from 'redux';

function comments(state=[], action){
  switch(action.type){
    case 'ADD_COMMENT':
        // console.log('comments reducer ', action.postId)
        if(!state[action.postId]){
          return {...state, [action.postId]: [action.comment]}
        }else{
          return {...state, [action.postId]: [...state[action.postId],(action.comment)]}
        }

    default: return state
  }

  return state;
}

function posts(state = _posts, action) {

  switch(action.type){
    case "REMOVE_POST":
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
      // const newState = Object.assign({}, state.filter(post => post.id !== action.index))
      // return newState;
      break;
    case "ADD_POST":
      return [...state, action.post];
      break;
    case 'LOAD_POSTS': return action.posts
    default:
      return state

  }

return state;
}

const rootReducer = combineReducers({posts, comments})
export default rootReducer;
