import { combineReducers } from 'redux'
import todos from './todos'
import completedTodoList from './completedTodoList'
import updateInput from './updateInput'

const todoApp = combineReducers({
  todos,
  completedTodoList,
  updateInput
})

export default todoApp
