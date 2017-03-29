const completedTodoList = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETED_TODO':
      return (action.todos.filter( (val) => val.status == 'COMPLETED')).length
    default:
      return state
  }
}

export default completedTodoList
