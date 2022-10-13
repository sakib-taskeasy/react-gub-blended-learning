import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import './css/style.css';
import Team from './components/Team'

function App() {
  return (
    <div className='section'>
      <div className='container'>
          <div className='row mt-5'>
              <Team name="Sabbir Ahmed" email="sabbir@taskeasy.io" />
              <Team name="Habib Tonoy" email="tonoy@taskeasy.io"/>
              <Team name="Minhaz Mithu" email="minhaz@taskeasy.io"/>
              <Team name ="Sakib Ahmed" email="sakib@taskeasy.io"/>
          </div>
      </div>
    </div>
  );
}

export default App;
