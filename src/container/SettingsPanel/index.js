import { connect } from 'react-redux'
import settings from '../../components/settingsPage'
import {changePassword,badRequestChangePassword,goodRequestChangePassword,
        changeUsername
        } from '../../actions'

const mapStateToProps = (state,ownProps) => ({    
        changePass:state.changePassRequests
  })

export default connect( mapStateToProps, 
                      { changePassword,
                        badRequestChangePassword,
                        goodRequestChangePassword,
                        changeUsername
                      } )
                        (settings)