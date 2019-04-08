import { connect } from 'react-redux'
import * as TodoActions from '../../actions'
import { bindActionCreators } from 'redux'
import Info from '../../components/info'

const mapStateToProps = state => ({    
    figures: state,
    value: state.value,
    id: state.id,
    lable : state.lable
  })
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Info)
  