const completedTodoList = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETED_TODO':
      return (action.todos.filter( (val) => val.status == 'COMPLETED')).length
    case 'DELETE_LIST_TODO':
      return (action.todos.todos.filter( (val) => val.status == 'COMPLETED' && val.id != action.id)).length
    default:
      return state
  }
}

export default completedTodoList
