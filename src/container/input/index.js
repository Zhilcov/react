import { connect } from 'react-redux'
import Input from '../../components/Input'
import { addFigure, editFigure, showRecycle } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
    routing: state.routing
  })
export default connect(mapStateToProps, { addFigure,editFigure, showRecycle })(Input)