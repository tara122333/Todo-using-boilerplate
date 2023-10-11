import React, { useCallback, useState } from 'react';
import './signup.page.scss';
import { useDeps } from '../../../contexts';
import { Link } from 'react-router-dom';

export default function SignupForm(): React.ReactElement {
  const { accessService } = useDeps();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const signin = useCallback(async () => {
    setSuccess(false);
    setError(false);

    try {
      await accessService.login(username, password);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  }, [
    accessService,
    username,
    password,
  ]);

  return (
    <form className='signup-form'>
      {success ? <h2 id='success'>SUCCESS!</h2> : null}
      {error ? <h2 id='error'>ERROR!</h2> : null}
      <h1>Sign Up</h1>
      <div className='signup-text'>
        <h2>Create an account</h2>
        <p>Already have an account? <Link to={"/"} className='login-link'>Login</Link> </p>
      </div>
      <input
        className='input-box'
        onChange={(e) => setUsername(e.target.value)}
        id='username'
        value={username}
        placeholder='Enter username'
        type='text'
      />
      <input
        className='input-box'
        onChange={(e) => setPassword(e.target.value)}
        id='password'
        value={password}
        type='password'
        placeholder='Enter password'
      />

      <input
        className='input-box'
        onChange={(e) => setCPassword(e.target.value)}
        id='cpassword'
        value={cpassword}
        type='password'
        placeholder='Enter confirm password'
      />
      <button type='button' className='signup-btn' onClick={signin}>
        Sign Up
      </button>
    </form>
  );
}
