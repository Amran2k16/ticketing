import { useState } from 'react';
import axios from 'axios';
const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log({ email, password });
    try {
      const response = await axios.post('/api/users/signup', {
        email: email,
        password: password,
      });
      console.log('onSubmit -> response', response.data);
    } catch (e) {
      console.log(e);
    }
    // try {
    //   console.log('inside try');
    //   const response = await axios.post('/api/users/currentuser');
    //   console.log('onSubmit -> response', response.data);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='form-control'
        />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default signup;
