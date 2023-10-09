import React from 'react';
import { Link } from 'react-router-dom';
import './footer.component.scss';
export default function Footer(): React.ReactElement {
  return (
    <div className='footer'>
      <div>
        <Link to='/about'>About Us</Link>
      </div>
      <div className='text-muted'>
        &#169; Jalan Technology Consulting, 2022
      </div>
    </div>
  );
}
