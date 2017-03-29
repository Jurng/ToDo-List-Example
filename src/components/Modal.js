import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo'

class Modal extends Component {
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add List To Do!!</h4>
            </div>
            <AddTodo />
          </div>
        </div>
      </div>
    )
  }
}


export default Modal
