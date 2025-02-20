import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Validation/Register';
import {BrowserRouter} from "react-router-dom"
import Login from './Components/Validation/Login';
import Admin from './Components/Admin/Admin';
import { UserProvider } from './Components/UserContext/UserContext';
import Home from './Components/Home/Final/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   {/* <App/> */}
   <UserProvider>
    <Home/>
  </UserProvider>,


  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
