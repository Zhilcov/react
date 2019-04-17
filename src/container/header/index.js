import { connect } from 'react-redux'
import header from '../../components/header'
import { logout } from '../../actions'



export default connect(null, { logout})(header)