import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Overview from './components/overview/Overview.jsx';

const App = () => {
  return (
   <div className="container">
    <div className='flex'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='overview'>
        <Overview/>
      </div>
    </div>
   </div>
  );
}

export default App;
