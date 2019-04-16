import { connect } from 'react-redux'
import * as TodoActions from '../../actions'
import { bindActionCreators } from 'redux'
import Info from '../../components/info'

const mapStateToProps = (state,ownProps) => ({    
    figures: state.todos,
    value: state.todos.value,
    id: state.todos.id,
    lable : state.todos.lable,
    state : state.appearance,
    hasErrored: state.figuresHasErrored,
    isLoading: state.figuresIsLoading,
    wasUpdated: state.figuresUpdated,
    /* page: state.routing.locationBeforeTransitions ? Number(state.routing.locationBeforeTransitions.query.page) : 1,
    */ router : state.routing
  })
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Info)
  