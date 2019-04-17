import { connect } from 'react-redux'
import log from '../../components/loginPage'
import { login,badRequestLogin } from '../../actions'

const mapStateToProps = (state) => ({
    autoriz: state.authorizRequests
})

export default connect(mapStateToProps, { login,badRequestLogin})(log)