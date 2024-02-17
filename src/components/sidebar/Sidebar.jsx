import React from 'react';
import './sidebar.css';

let user = "Andy Repp"
function Sidebar() {
  return (
    <div className="sidebar-holder">
      <div className="welcome">
        <p className="greeting">Welcome,</p>
        <p className='user'>{user}</p>
      </div>
      <div className="metrics">
        <p className=" heading">Metrics</p>
        <ul>
          <li className='active'>
            <div className="holder"></div>
            <p>Overview</p>
          </li>
          <li>
            <div className="holder"></div>
            <p>Detailing</p>
          </li>
          <li>
            <div className="holder"></div>
            <p>Calls</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="info heading ">Information</p>
        <ul>
          <li>
            <div className='holder'></div>
            <p>About profiles</p>
          </li>
          <li>
            <div className="holder"></div>
            <p>Detailing targets</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;