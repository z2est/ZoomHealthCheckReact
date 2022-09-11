import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['zoom1', 'zoom2']);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Zoom HealthCheck</h4>
      </div>
      <div className='list'>
        <h4>{ title[0] }</h4>
        <p>2022년 09월 11일</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2022년 09월 11일</p>
      </div>
    </div>
  );
}

export default App;
