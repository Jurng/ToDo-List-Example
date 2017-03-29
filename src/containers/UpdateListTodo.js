import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateList } from '../actions'


class UpdateListTodo extends Component {

  render() {
    let props = this.props
    let updateListValue = '';

    return (
          <form onSubmit={e => {
          e.preventDefault()
          if (!updateListValue.value.trim()) {
            alert("ระบุรายการ");
            return
          }

          props.onUpdateListValue(updateListValue.value, props.todos.id);
          updateListValue.value = '';
        }}
    >
      <div className="input-group text-box-list-style">

        <input type="text" className="form-control input-edit-style"  ref={node => { updateListValue = node }} onChange={this.handleChange} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Update!</button>
        </span>
      </div>
    </form>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  inputValue: ""
})

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdateListValue: (text, id) => { dispatch(updateList(text, id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateListTodo)
