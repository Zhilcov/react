import { connect } from 'react-redux'
import panel from '../../components/adminPanel'
import {getUsers, deleteUser,setAdmin} from '../../actions'

const mapStateToProps = (state,ownProps) => ({    
    users: state.usersFetchSuccess,
    wasUpdated:state.usersUpdated
  })

export default connect(mapStateToProps, {getUsers,deleteUser,setAdmin})(panel)