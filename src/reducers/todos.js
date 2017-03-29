const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        status: 'SHOW',
        process: '',
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'DELETE_LIST_TODO':
      return state.filter( (item, index) => item.id !== action.id);
    case 'EDIT_LIST_TODO':
      let updateStatus = state.forEach(function(value){
        if(value.id == action.id)
            value.process = 'EDIT';
        });
      return Object.assign([], state, updateStatus)
    case 'UPDATE_LIST_TODO':
      let updateListText = state.forEach(function(value){
        if(value.id == action.id)
        {
          value.process = '';
          value.text   = action.text;
        }
      });
      return Object.assign([], state, updateListText)
    case 'UPDATE_COMPLETED_TODO':
        let updateCompleted = state.forEach(function(value){
          if(value.id == action.id)
          {
            value.status = action.status == 'COMPLETED' ? 'SHOW' : 'COMPLETED';
          }
        });
      return Object.assign([], state, updateCompleted)
    default:
      return state
  }
}

export default todos
