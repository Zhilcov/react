import { connect } from 'react-redux'
import * as TodoActions from '../../actions'
import { bindActionCreators } from 'redux'
import Stats from '../../components/stats'

const mapStateToProps = state => ({    
    figures: state
  })
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Stats)
  