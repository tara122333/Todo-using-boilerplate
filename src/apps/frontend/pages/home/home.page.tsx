import React, { useEffect } from 'react';
import './home.page.scss';
import { Addtask, Footer, Header, Tasks } from '../../components';
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
      <Header />
      <div className='container'>
        <div className='home'>
          <Addtask />
          <Tasks />
        </div>
      </div>
      <Footer />
    </>
  );
}
