import React, { PropTypes } from 'react';
import Todo from './Todo';


const ListTodo = (todos) => (
  <div className="todo-list">
    <ul className="list">
      {todos.todos.map(todo =>
        <Todo
          key={todo.id}
          onClick={ () => todos.onDeleteList(todo.id)}
          onEditList={ () => todos.onEditList(todo.id)}
          onUpdateCompleted={() => todos.onUpdateCompleted(todo.id, todo.status, todos.todos)}
          {...todo}
        />
      )}
    </ul>
  </div>
)

ListTodo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDeleteList: PropTypes.func.isRequired,
  onEditList: PropTypes.func.isRequired
}



export default ListTodo
