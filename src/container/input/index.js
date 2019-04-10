import { connect } from 'react-redux'
import Input from '../../components/Input'
import { addFigure, editFigure } from '../../actions'

export default connect(null, { addFigure,editFigure })(Input)