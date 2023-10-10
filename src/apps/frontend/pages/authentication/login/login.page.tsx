import React, { useCallback, useState } from 'react';

import { useDeps } from '../../../contexts';
import './login.page.scss';

export default function LoginForm(): React.ReactElement {
  const { accessService } = useDeps();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const login = useCallback(async () => {
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
    <>

      <form className='login-form'>
        {success ? <h2 id='success'>SUCCESS!</h2> : null}
        {error ? <h2 id='error'>ERROR!</h2> : null}
        <h1>Login</h1>
        <div className='login-text'>
          <h2>Welcome guys!</h2>
          <p>Don't have an Account? <span className='signup-link'>Sign Up </span> </p>
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
        <button type='button' className='login-btn' onClick={login}>
          LOGIN
        </button>
      </form>
    </>

  );
}
