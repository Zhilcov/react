import { connect } from 'react-redux'
import reg from '../../components/registrationPage'
import { register } from '../../actions'


export default connect(null, { register})(reg)