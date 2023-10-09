import React from 'react';
import './header.component.scss';


export default function Header(): React.ReactElement {

  const logout = () => {
    localStorage.clear();
  }

  return (
    <div className="navbar">
      <div className="navbar-logo-section">
        <div className="navbar-logo-img">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft_To-Do_icon.png/1200px-Microsoft_To-Do_icon.png" alt="logo" style={{ width: '100%', height: "100%" }} />
        </div>
        <h3>ToDo</h3>
      </div>
      <div className="navbar-profile-section">
        <h3>Name</h3>
        <p className="log-out-btn"
          onClick={logout}
        >Log out</p>
      </div>
    </div>
  );
}
