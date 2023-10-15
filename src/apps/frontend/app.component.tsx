import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Config } from './helpers';
import { About, Home, Login, NotFound, Signup } from './pages';
import InspectLet from './vendor/inspectlet';


import './app.global.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function App(): React.ReactElement {

  useEffect(() => {
    const inspectletKey = Config.getConfigValue('inspectletKey');
    if (inspectletKey) {
      InspectLet();
    }
  }, []);

  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Login />} />
          <Route path='/home/:accountId' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
