import { connect } from 'react-redux'
import reg from '../../components/registrationPage'
import { register,badRequestLogin } from '../../actions'

const mapStateToProps = (state) => ({
    autoriz: state.authorizRequests
})

export default connect(mapStateToProps, { register,badRequestLogin})(reg)