import React, { useCallback, useState } from 'react';

import './login.page.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AccessService } from '../../../services';

import { ToastContainer, toast } from 'react-toastify';

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
      if (username.length <= 0) {
        toast.error("username required!")
      }
      else if (password.length <= 0) {
        toast.error("password required!")
      }
      else {
        const response = await accessService.login(username, password);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.accountId);
          setSuccess(true);
          navigate(`/home/${response.data.accountId}`);
          toast.success("login success");
        }
        else {
          toast.error("login fail")
          setError(true);
        }
      }
    } catch (err) {
      toast.error("login fail")
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
        <ToastContainer />
      </form>
    </>

  );
}
