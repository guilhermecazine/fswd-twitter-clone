import React, { Component } from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: ''
    };

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  signup = (e) => {
    e.preventDefault();
    
    fetch('/api/users', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }
      })
    }))
    .then(handleErrors)
    .then((data) => {
      console.log('data:', data)
      if (data.success) {
        this.setState({
          email: '',
          password: '',
          username: '',
        })
      }
      this.createSession();
    })
    .catch(error => {
      this.setState({
        error: 'Sign up failed'
      })
    })
  }

  createSession = () => {
    const { username, password } = this.state;
    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username,
          password,
        }
      }),
    }))
    .then(handleErrors)
    .then((data) => {
      window.location.href = '/feeds';
      console.log('Success:', data)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="card signup-card p-2 border border-primary">
          <div className="sign-in-title card-title"><h4>Sign up here</h4></div>
          <form id="signup-form" onSubmit={this.signup}>
            <div className="form-group">
              <input onChange={this.handleChange} type="text" name="username" value={this.username} className="form-control username mb-2 border border-primary" placeholder="username" />
            </div>
            <div className="form-group col-xs-8">
              <input onChange={this.handleChange} type="email" name="email" value={this.email} className="form-control email my-2 border border-primary" placeholder="Email" />
            </div>
            <div className="form-group col-xs-8">
              <input onChange={this.handleChange} type="password" name="password" value={this.password} className="form-control password my-2 border border-primary" placeholder="Password" />
            </div>
            <button id="sign-in-btn" className="btn btn-default btn-primary col-xs-3">Sign up</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Signup