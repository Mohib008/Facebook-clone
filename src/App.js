import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    //BEM naming convention
    <div className="app">
     <Header />
     <div className="app__body">
      <Sidebar />
      {/* SideBar */}
      {/* Feed */}
      {/* Widghs */}
    </div>
    </div>
  );
}

export default App;
