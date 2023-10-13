import React, { useCallback, useState } from 'react';
import './signup.page.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AccessService } from '../../../services';

import { ToastContainer, toast } from 'react-toastify';

export default function SignupForm(): React.ReactElement {
  const accessService = new AccessService
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const signup = useCallback(async () => {
    setSuccess(false);
    setError(false);

    try {
      if (username.length <= 0) {
        toast.error("username required!")
      }
      else if (password.length <= 0) {
        toast.error("password required!")
      }
      else if (cpassword.length <= 0) {
        toast.error("confirm password required!")
      }
      else if (password !== cpassword) {
        toast.error("password not matche!")
      }
      else {
        const response = await accessService.signup(username, password);
        if (response.data.id) {
          setSuccess(true);
          toast.success("signup success!!");
          const loginData = await accessService.login(username, password);
          if (loginData.data.token) {
            localStorage.setItem("token", loginData.data.token);
            localStorage.setItem("user", loginData.data.accountId);
            navigate(`/home/${loginData.data.accountId}`);
          }
        }
        else {
          toast.error("username not correct!! Or already Exist!!")
          setError(true);
        }
      }
    } catch (err) {
      toast.error("signup fail")
      setError(true);
    }
  }, [
    accessService,
    username,
    password,
    cpassword
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

      <input
        className='input-box'
        onChange={(e) => setCPassword(e.target.value)}
        id='cpassword'
        value={cpassword}
        type='password'
        placeholder='Enter confirm password'
        autoComplete='off'
      />
      <button type='button' className='signup-btn' onClick={signup}>
        Sign Up
      </button>
      <ToastContainer />
    </form>
  );
}
