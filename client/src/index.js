import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//use for only one base api server
// import axios from "axios"
// axios.defaults.baseURL="http://localhost:3001"
// axios.defaults.withCredentials=true

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


