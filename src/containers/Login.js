import AccountLogin from '../components/AccountLogin';
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  userLoginFetch: user => dispatch(userLoginFetch(user))
})

export default connect(null, mapDispatchToProps)(AccountLogin);