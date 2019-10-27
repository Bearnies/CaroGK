import AccountSignup from '../components/AccountSignup'
import {connect} from 'react-redux';
import {userSignupFetch} from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    userSignupFetch: user => dispatch(userSignupFetch(user))
  })
  
export default connect(null, mapDispatchToProps)(AccountSignup);