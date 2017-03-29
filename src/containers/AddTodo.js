import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <div className="modal-body">
          <div className="form-group">
            <input type="text" className="form-control"  ref={node => { input = node }} placeholder="Your list.." />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
       </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
