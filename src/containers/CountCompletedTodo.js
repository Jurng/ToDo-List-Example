import React from 'react'
import { connect } from 'react-redux'

let CountCompletedTodo = ({completedTodoList}) => (
  <div className="todo-complted">
    <span>{completedTodoList}</span>  Completed
  </div>
)

const mapStateToProps = (state) => ( {'completedTodoList' : state.completedTodoList} )

CountCompletedTodo = connect(mapStateToProps)(CountCompletedTodo)

export default CountCompletedTodo
