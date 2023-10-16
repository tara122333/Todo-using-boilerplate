import React, { useState } from 'react';
import Usermodal from './usermodal.component';
import './header.component.scss';
import { RxCross2 } from 'react-icons/rx'
import {RiUser3Line} from 'react-icons/ri'

export default function Header(): React.ReactElement {

  const [openusermodal, setOpenusermodal] = useState(false);

  const openusermodalbox = () => {
    setOpenusermodal(!openusermodal);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-section">
          <div className="navbar-logo-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft_To-Do_icon.png/1200px-Microsoft_To-Do_icon.png" alt="logo" style={{ width: '100%', height: "100%" }} />
          </div>
          <h3>ToDo</h3>
        </div>
        <div className="navbar-profile-section" onClick={openusermodalbox}>
          {
            !openusermodal ? <>
              <span className='user-profile'>
                <RiUser3Line />
              </span>
            </> :
              <>
                <span className='user-profile'>
                  <RxCross2 />
                </span>
              </>
          }

        </div>
      </div>
      {
        openusermodal && <Usermodal setIsOpen={setOpenusermodal} />
      }
    </>
  );
}
