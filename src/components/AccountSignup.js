import React from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {userSignupFetch} from '../actions/actions';
import "./AccountSignup.css";

class AccountSignup extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userSignupFetch(this.state)
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  render() {
    return (
      <div className='SignupForm'>
        <form onSubmit={this.handleSubmit}>
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

          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              name='confirmPassword'
              placeholder='Confirm your Password'
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type='password'
            />
          </FormGroup>
  
          <Button disabled={!this.validateForm()} type='submit' block>
            Sign Up
          </Button>
  
          <Link to='/login' className='btn Cancel'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default AccountSignup;

// export default function AccountSignup() {
//     //Sử dụng useState để set state, không cần state, setState
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setconfirmPassword] = useState('');

//     function validateForm() {
//       return (
//             username.length > 0 &&
//             password.length > 0 &&
//             password === confirmPassword
//             );
//     }
  
//     function handleSubmit(event) {
//       event.preventDefault();
//     }
  
//     return (
//       <div className='SignupForm'>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <FormLabel>Username</FormLabel>
//             <FormControl
//               autoFocus
//               value={username}
//             onChange={e => setUsername(e.target.value)}
//             />
//           </FormGroup>
  
//           <FormGroup>
//             <FormLabel>Password</FormLabel>
//             <FormControl
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               type='password'
//             />
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Confirm Password</FormLabel>
//             <FormControl
//               value={confirmPassword}
//               onChange={e => setconfirmPassword(e.target.value)}
//               type='password'
//             />
//           </FormGroup>
  
//           <Button disabled={!validateForm()} type='submit' block>
//             Sign Up
//           </Button>
  
//           <Link to='/login' className='btn Cancel'>Cancel</Link>
//         </form>
//       </div>
//     );
// }