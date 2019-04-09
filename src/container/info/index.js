import { connect } from 'react-redux'
import * as TodoActions from '../../actions'
import { bindActionCreators } from 'redux'
import Info from '../../components/info'

const mapStateToProps = (state,ownProps) => ({    
    figures: state.todos,
    value: state.todos.value,
    id: state.todos.id,
    lable : state.todos.lable,
    ownProps
  })
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Info)
  