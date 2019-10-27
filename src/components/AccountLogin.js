import React from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {userLoginFetch} from '../actions/actions';
import "./AccountLogin.css"

class AccountLogin extends React.Component {
  state = {
    username: '',
    password: ''
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.userLoginFetch(this.state) //Undefined
  }

  render() {
    return(
        <div className='Login'>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              name='username'
              placeholder='Enter your Username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl
              name='password'
              placeholder='Enter your Password'
              value={this.state.password}
              onChange={this.handleChange}
              type='password'
            />
          </FormGroup>

          <Button className='btn btn-primary Loginbtn' disabled={!this.validateForm()} type='submit' block='true'>
            Login
          </Button>

          <Link to='/signup' className='btn Signup'>Sign Up</Link>
        </form>
      </div>
    )
  }
}

export default AccountLogin;

// export default function AccountLogin() {
//   //Sử dụng useState để set state, không cần state, setState
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function validateForm() {
//     return(
//             username.length > 0 &&
//             password.length > 0
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className='Login'>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <FormLabel>Username</FormLabel>
//           <FormControl
//             autoFocus
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type='password'
//           />
//         </FormGroup>

//         <Button disabled={!validateForm()} type='submit' block>
//           Login
//         </Button>

//         <Link to='/signup' className='btn Signup'>Sign Up</Link>
//       </form>
//     </div>
//   );
// }