import React, { Component } from 'react';
import UpdateListTodo from '../containers/UpdateListTodo'

const Todo = (todos) => {
  let _showList = "";
  let _showBtn  = "";
  if(todos.process == 'EDIT')
  {
    _showList = (<UpdateListTodo todos={todos} />);
  }
  else{
     _showList = (<label htmlFor={"check-" + todos.id}>{ todos.text }</label>);
    _showBtn  = (
        <span>
          <a href="#" onClick={todos.onEditList} className="btn-common"><i className="glyphicon glyphicon-wrench"></i></a>
          &nbsp;
          <a href="#" onClick={todos.onDeleteList}  className="btn-common"><i className="glyphicon glyphicon-remove"></i></a>
        </span>
    )
  }

  return(
      <li>
        <input type="checkbox" id={"check-" + todos.id}  className="checkbox-bd" defaultChecked={ todos.status == 'COMPLETED' ? true : false } onChange={todos.onUpdateCompleted} />
        {_showList}
        {_showBtn}
      </li>
    )}

export default Todo
