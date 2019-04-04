import { connect } from 'react-redux'
import Input from '../../components/Input'
import { addFigure } from '../../actions'

export default connect(null, { addFigure })(Input)