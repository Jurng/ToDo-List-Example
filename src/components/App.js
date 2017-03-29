import React, { Component } from 'react';

import ListTodo from './ListTodo';
import VisibleTodoList from '../containers/VisibleTodoList'
import CountCompletedTodo from '../containers/CountCompletedTodo'
import Modal from './Modal'


class App extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="todo-header">
                <h4 className="header-text">Reminders</h4>
                <a href="#" className="btn-add btn-common" data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-plus"></i></a>
                <Modal />
              </div>
              <CountCompletedTodo />
              <VisibleTodoList />
            </div>
          </div>
        </div>


      </div>
    )
  }
}


export default App
