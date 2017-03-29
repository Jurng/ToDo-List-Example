import { connect } from 'react-redux'
import * as Actions from '../actions'
import ListTodo from '../components/ListTodo'


const mapStateToProps = (state) => ( {'todos' : state.todos} )

const mapDispatchToProps = (dispatch) => {
  return{
    onDeleteList:(id, todos) => {
        dispatch(Actions.deleteList(id, todos));
      return dispatch(Actions.listNumberAfterDelete(id, todos))
    },
    onEditList:(id) => {dispatch(Actions.editList(id))},
    onUpdateCompleted: (id, status, todos) => { dispatch(Actions.updateCompleted(id, status, todos)) }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodo)

export default VisibleTodoList
