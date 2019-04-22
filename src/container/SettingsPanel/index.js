import { connect } from 'react-redux'
import settings from '../../components/settingsPage'
import {changePassword,badRequestChangePassword,goodRequestChangePassword,
        changeUsername,badRequestChangeUsername
        } from '../../actions'

const mapStateToProps = (state,ownProps) => ({    
        changePass:state.changePassRequests,
        req:state.changeUsernameRequests
  })

export default connect( mapStateToProps, 
                      { changePassword,
                        badRequestChangePassword,
                        goodRequestChangePassword,
                        changeUsername,
                        badRequestChangeUsername
                      } )
                        (settings)