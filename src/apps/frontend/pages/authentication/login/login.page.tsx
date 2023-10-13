import React, { useCallback, useState } from 'react';

import './login.page.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AccessService } from '../../../services';

export default function LoginForm(): React.ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const accessService = new AccessService();

  const navigate = useNavigate();

  const login = useCallback(async () => {
    setSuccess(false);
    setError(false);

    try {
      const response = await accessService.login(username, password);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setSuccess(true);
        navigate(`/home/${response.data.accountId}`);
      }
      else {
        setError(false);
      }
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
          <p>Don't have an Account? <Link to={"/signup"} className='signup-link'>Sign Up </Link> </p>
        </div>
        <input
          className='input-box'
          onChange={(e) => setUsername(e.target.value)}
          id='username'
          value={username}
          placeholder='Enter username'
          type='text'
          autoComplete='off'
        />
        <input
          className='input-box'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          value={password}
          type='password'
          placeholder='Enter password'
          autoComplete='off'
        />
        <button type='button' className='login-btn' onClick={login}>
          LOGIN
        </button>
      </form>
    </>

  );
}
