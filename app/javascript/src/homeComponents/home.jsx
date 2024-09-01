import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';
import HomeNav from './homeNav.jsx'
import Login from './login.jsx'
import Signup from './signup';

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeNav />
      <div className="container main">
        <div className="row">
          <div className="welcome col-7">
            <p id="welcome-title"><strong>Welcome to Twitter</strong></p>
            <p id="welcome-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="log-in col-5">
            <Login />
            <Signup />
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
