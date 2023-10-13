import React, { useEffect } from 'react';
import './home.page.scss';
import { Addtask, Tasks } from '../../components';
import { useNavigate } from 'react-router-dom';

export default function Home(): React.ReactElement {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [])

  return (
    <>
      <div className='home'>
        <Addtask />
        <Tasks />
      </div>
    </>
  );
}
