import React from 'react';
import './overview.css';
import Donut from '../donut/Donut.jsx';
import LineChart from '../lineChart/Linechart.jsx';

function Overview() {
  return (
    <div className='overview-holder'>
      <h1>Overview</h1>
      <div className="flex-holder">
        <div className="next-call segment">
          <h2 className='header'>Next call</h2>
          <div className="details">
            <div>
              <h2>Date:</h2>
              <p>Tomorrow, 3PM 18 February 2023</p>
            </div>
            <div>
              <h2>Account:</h2>
              <p>Dr. Clinton Ackerman</p>
              </div>
              <div>
              <h2>Speciality:</h2>
              <p>Respiratory therapist Assistive therapy</p>
              </div>
              <div>
              <h2>Profiling:</h2>
              <p>Confident</p>
            </div> 
          </div>
        </div>
        <div className='donut segment'>
          <h2 className='header'>Calls this month</h2>
          <div className='donut-chart'>
            <div className='layer'></div>
            <Donut/>
          </div>
        </div>
      </div>
      <div className="breakdown">
        <h2>Detailing topic breakdown</h2>
        <LineChart/>

      </div>
      
    </div>
  )
}

export default Overview
