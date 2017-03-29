import {v4} from 'node-uuid'

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text
})

export const deleteList = (id,todos) => {
  return {
    type: 'DELETE_LIST_TODO',
    id,
    todos
  }
}

export const editList = (id) => ({
  type: 'EDIT_LIST_TODO',
  id
})

export const updateCompleted = (id, status, todos) => ({
    type: 'UPDATE_COMPLETED_TODO',
    id,
    status,
    todos
  })

export const listNumberAfterDelete = (id,todos) => ({
    type: 'DELETE_LIST_TODO',
    id,
    todos
})
export const updateList = (text,id) => ({
  type: 'UPDATE_LIST_TODO',
  id,
  text
})





